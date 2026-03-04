import { cn } from '@lib/utils/cn';

type TrendDirection = 'up' | 'down' | 'neutral';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: TrendDirection;
  trendLabel?: string;
  className?: string;
}

/**
 * Tarjeta de metrica para el dashboard.
 * Uso: <MetricCard title="MRR del mes" value="S/ 4,500" trend="up" trendLabel="+12% vs mes anterior" />
 */
export function MetricCard({ title, value, subtitle, trend, trendLabel, className }: MetricCardProps) {
  return (
    <div className={cn('metric-card', className)} role="region" aria-label={title}>
      <p className="metric-card__title">{title}</p>
      <p className="metric-card__value">{value}</p>
      {subtitle && <p className="metric-card__subtitle">{subtitle}</p>}
      {trend && trendLabel && (
        <p className={cn('metric-card__trend', `metric-card__trend--${trend}`)}>
          {trendLabel}
        </p>
      )}
    </div>
  );
}
