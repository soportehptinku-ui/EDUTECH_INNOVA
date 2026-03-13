import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';
import { AppLayout } from '@components/layout/AppLayout';
import { PublicLayout } from '@components/layout/PublicLayout';
import { LoadingScreen } from '@components/ui/LoadingScreen';

// Carga diferida por modulo para reducir el bundle inicial
import { lazy, Suspense } from 'react';

const LoginPage        = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage     = lazy(() => import('@pages/auth/RegisterPage'));
const BlogPage         = lazy(() => import('./pages/dashboard/blog'));
const PrivacidadPage   = lazy(() => import('./pages/dashboard/privacidad'));
const DatosPage        = lazy(() => import('./pages/dashboard/datos'));
const SlaPage          = lazy(() => import('./pages/dashboard/sla'));
const CuotaPage        = lazy(() => import('./pages/cuota/CuotaPage'));
const CobranzaPage     = lazy(() => import('./pages/cobranza/CobranzaPage'));
const CertificadosPage = lazy(() => import('./pages/certificados/CertificadosPage'));
const VerifyPage       = lazy(() => import('./pages/verify/VerifyPage'));
const AsistentePage    = lazy(() => import('./pages/asistente/AsistentePage'));
const CrmPage          = lazy(() => import('./pages/crm/CrmPage'));
const PlanesPage       = lazy(() => import('./pages/planes/PlanesPage'));
const NotFoundPage     = lazy(() => import('@pages/NotFoundPage'));

// --- ESTAS SON LAS QUE FALTABAN ---
const BlogPage         = lazy(() => import('./pages/dashboard/blog'));
const PrivacidadPage   = lazy(() => import('./pages/dashboard/privacidad'));

// Redirige al login si no hay sesion activa
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  if (!session) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>

       {/* Rutas publicas */}
        <Route element={<PublicLayout />}>
          <Route path="/login"      element={<LoginPage />} />
          <Route path="/registro"   element={<RegisterPage />} />
          <Route path="/terminos"   element={<TérminosPage />} /> {/* Aquí irían los Términos de uso */}
          <Route path="/verify/:id" element={<VerifyPage />} />
        </Route>

       {/* Rutas protegidas — requieren sesion (Colegio registrado) */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          {/* Dashboard Principal */}
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard"    element={<DashboardPage />} />
          
          {/* SECCIÓN LEGAL PRIVADA */}
          <Route path="/privacidad"   element={<PrivacidadPage />} />
          <Route path="/datos"        element={<DatosPage />} />
          <Route path="/sla"          element={<SlaPage />} />
          
          {/* Otras características del Colegio */}
          <Route path="/blog"         element={<BlogPage />} />
          <Route path="/cuota"        element={<CuotaPage />} />
          <Route path="/cobranza"     element={<CobranzaPage />} />
          <Route path="/certificados" element={<CertificadosPage />} />
          <Route path="/asistente"    element={<AsistentePage />} />
          <Route path="/crm"          element={<CrmPage />} />
          <Route path="/planes"       element={<PlanesPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
