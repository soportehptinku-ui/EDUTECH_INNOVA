import { cn } from '@lib/utils/cn';
import { formatNumber, formatPercent } from '@lib/utils/format';

interface QuotaBarProps {
  label: string;
  used: number;
  total: number;
  className?: string;
}

/**
 * Barra de progreso de cuota de paginas.
 * Cambia de color automaticamente: verde (< 60%), amarillo (60-80%), rojo (> 80%).
 * Uso: <QuotaBar label="Blanco y negro" used={320} total={500} />
 */
export function QuotaBar({ label, used, total, className }: QuotaBarProps) {
  const percent = total > 0 ? used / total : 0;

  const colorClass =
    percent < 0.6 ? 'quota-bar--ok' :
    percent < 0.8 ? 'quota-bar--warn' :
                    'quota-bar--danger';

  return (
    <div className={cn('quota-bar', className)}>
      <div className="quota-bar__header">
        <span className="quota-bar__label">{label}</span>
        <span className="quota-bar__numbers">
          {formatNumber(used)} / {formatNumber(total)} pag.
          <span className="quota-bar__percent"> ({formatPercent(percent)})</span>
        </span>
      </div>
      <div className="quota-bar__track" role="progressbar" aria-valuenow={used} aria-valuemax={total}>
        <div
          className={cn('quota-bar__fill', colorClass)}
          style={{ width: `${Math.min(percent * 100, 100)}%` }}
        />
      </div>
    </div>
  );
}
