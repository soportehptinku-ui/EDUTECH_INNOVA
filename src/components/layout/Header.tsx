import { useCuota } from '@hooks/useCuota';
import { useAuth } from '@hooks/useAuth';
import { formatPercent } from '@lib/utils/format';
import { cn } from '@lib/utils/cn';

export function Header() {
  const { session }                         = useAuth();
  const institucionId                       = session?.user?.user_metadata?.institucion_id ?? '';
  const { porcentajeUsado, alertaActiva }   = useCuota(institucionId);

  return (
    <header className="header">
      {alertaActiva && (
        <div className="header__alerta" role="alert">
          Cuota al {formatPercent(porcentajeUsado)} - Considera contratar paginas adicionales
        </div>
      )}

      <div className="header__right">
        <span
          className={cn('header__cuota-badge', alertaActiva && 'header__cuota-badge--alerta')}
          aria-label={`Cuota usada: ${formatPercent(porcentajeUsado)}`}
        >
          {formatPercent(porcentajeUsado)} usado
        </span>

        <span className="header__user">
          {session?.user?.email}
        </span>
      </div>
    </header>
  );
}
