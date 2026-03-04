import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@lib/supabase/client';
import type { CuotaMensual } from '@types/cuota';

interface CuotaState {
  cuota: CuotaMensual | null;
  loading: boolean;
  error: string | null;
  porcentajeUsado: number;
  alertaActiva: boolean;
  refetch: () => void;
}

const UMBRAL_ALERTA = 0.8; // Alerta cuando el uso supera el 80%

/**
 * Hook de cuota mensual.
 * Calcula el porcentaje de uso y activa la alerta al superar el umbral.
 * Expone refetch para actualizar despues de registrar una impresion.
 */
export function useCuota(institucionId: string): CuotaState {
  const [cuota, setCuota]     = useState<CuotaMensual | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  const fetchCuota = useCallback(async () => {
    setLoading(true);
    setError(null);

    const mesActual = new Date().toISOString().slice(0, 7); // 'YYYY-MM'

    const { data, error: dbError } = await supabase
      .from('cuota_mensual')
      .select('*')
      .eq('institucion_id', institucionId)
      .eq('mes', mesActual)
      .single();

    if (dbError) {
      setError(dbError.message);
    } else {
      setCuota(data);
    }

    setLoading(false);
  }, [institucionId]);

  useEffect(() => {
    if (institucionId) fetchCuota();
  }, [fetchCuota, institucionId]);

  const totalDisponible = (cuota?.paginas_bn_disponibles ?? 0) + (cuota?.paginas_color_disponibles ?? 0);
  const totalUsado      = (cuota?.paginas_bn_usadas ?? 0) + (cuota?.paginas_color_usadas ?? 0);
  const porcentajeUsado = totalDisponible > 0 ? totalUsado / totalDisponible : 0;

  return {
    cuota,
    loading,
    error,
    porcentajeUsado,
    alertaActiva: porcentajeUsado >= UMBRAL_ALERTA,
    refetch: fetchCuota,
  };
}
