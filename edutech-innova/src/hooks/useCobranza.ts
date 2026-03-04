import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@lib/supabase/client';
import type { ResumenCobranza } from '@types/cobranza';

interface CobranzaState {
  resumen: ResumenCobranza | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook de cobranza.
 * Obtiene el resumen mensual: total cobrado, pendiente y porcentaje de morosidad.
 */
export function useCobranza(institucionId: string): CobranzaState {
  const [resumen, setResumen] = useState<ResumenCobranza | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  const fetchResumen = useCallback(async () => {
    setLoading(true);
    setError(null);

    const mesActual = new Date().toISOString().slice(0, 7);

    const { data, error: dbError } = await supabase
      .from('cobros')
      .select('estado, monto')
      .eq('institucion_id', institucionId)
      .gte('fecha_vencimiento', `${mesActual}-01`);

    if (dbError) {
      setError(dbError.message);
      setLoading(false);
      return;
    }

    const cobros = data ?? [];
    const totalCobrado  = cobros.filter(c => c.estado === 'pagado').reduce((s, c) => s + c.monto, 0);
    const totalPendiente = cobros.filter(c => c.estado !== 'pagado').reduce((s, c) => s + c.monto, 0);
    const totalAlumnos  = cobros.length;
    const morosos       = cobros.filter(c => c.estado === 'vencido').length;

    setResumen({
      totalCobrado,
      totalPendiente,
      porcentajeMorosidad: totalAlumnos > 0 ? (morosos / totalAlumnos) * 100 : 0,
      totalAlumnos,
    });
    setLoading(false);
  }, [institucionId]);

  useEffect(() => {
    if (institucionId) fetchResumen();
  }, [fetchResumen, institucionId]);

  return { resumen, loading, error, refetch: fetchResumen };
}
