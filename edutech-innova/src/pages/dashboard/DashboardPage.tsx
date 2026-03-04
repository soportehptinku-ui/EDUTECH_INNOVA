import { SeoHead } from '@/seo/SeoHead';
import { useAuth } from '@hooks/useAuth';
import { useCuota } from '@hooks/useCuota';
import { useCobranza } from '@hooks/useCobranza';
import { MetricCard } from '@components/dashboard/MetricCard';
import { QuotaBar } from '@components/cuota/QuotaBar';
import { LoadingScreen } from '@components/ui/LoadingScreen';
import { formatCurrency, formatPercent } from '@lib/utils/format';

export default function DashboardPage() {
  const { session }       = useAuth();
  const institucionId     = session?.user?.user_metadata?.institucion_id ?? '';
  const institucionNombre = session?.user?.user_metadata?.nombre ?? 'Mi institucion';

  const { cuota, loading: cuotaLoading }         = useCuota(institucionId);
  const { resumen, loading: cobranzaLoading }     = useCobranza(institucionId);

  if (cuotaLoading || cobranzaLoading) return <LoadingScreen />;

  return (
    <>
      <SeoHead
        title="Panel principal"
        description="Resumen del mes: cuota de paginas, estado de cobranza y metricas de tu institucion."
        canonical="/dashboard"
        noIndex
      />

      <div className="page">
        <h1 className="page__title">Bienvenido, {institucionNombre}</h1>
        <p className="page__subtitle">Este es el resumen del mes actual</p>

        <section className="page__section" aria-labelledby="metricas-titulo">
          <h2 id="metricas-titulo" className="section__title">Metricas del mes</h2>
          <div className="metrics-grid">
            <MetricCard
              title="Total cobrado"
              value={formatCurrency(resumen?.totalCobrado ?? 0)}
              trend="up"
              trendLabel="Ingresos confirmados este mes"
            />
            <MetricCard
              title="Pendiente de cobro"
              value={formatCurrency(resumen?.totalPendiente ?? 0)}
              subtitle={`Morosidad: ${formatPercent((resumen?.porcentajeMorosidad ?? 0) / 100)}`}
              trend={resumen && resumen.porcentajeMorosidad > 20 ? 'down' : 'neutral'}
            />
            <MetricCard
              title="Alumnos activos"
              value={String(resumen?.totalAlumnos ?? 0)}
            />
          </div>
        </section>

        <section className="page__section" aria-labelledby="cuota-titulo">
          <h2 id="cuota-titulo" className="section__title">Estado de cuota</h2>
          <div className="quota-grid">
            <QuotaBar
              label="Paginas blanco y negro"
              used={cuota?.paginas_bn_usadas ?? 0}
              total={cuota?.paginas_bn_disponibles ?? 0}
            />
            <QuotaBar
              label="Paginas a color"
              used={cuota?.paginas_color_usadas ?? 0}
              total={cuota?.paginas_color_disponibles ?? 0}
            />
          </div>
        </section>
      </div>
    </>
  );
}
