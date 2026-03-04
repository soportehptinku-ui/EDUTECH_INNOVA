import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';
import { AppLayout } from '@components/layout/AppLayout';
import { PublicLayout } from '@components/layout/PublicLayout';
import { LoadingScreen } from '@components/ui/LoadingScreen';

// Carga diferida por modulo para reducir el bundle inicial
import { lazy, Suspense } from 'react';

const LoginPage        = lazy(() => import('@pages/auth/LoginPage'));
const RegisterPage     = lazy(() => import('@pages/auth/RegisterPage'));
const DashboardPage    = lazy(() => import('@pages/dashboard/DashboardPage'));
const CuotaPage        = lazy(() => import('@pages/cuota/CuotaPage'));
const CobranzaPage     = lazy(() => import('@pages/cobranza/CobranzaPage'));
const CertificadosPage = lazy(() => import('@pages/certificados/CertificadosPage'));
const VerifyPage       = lazy(() => import('@pages/verify/VerifyPage'));
const AsistentePage    = lazy(() => import('@pages/asistente/AsistentePage'));
const CrmPage          = lazy(() => import('@pages/crm/CrmPage'));
const PlanesPage       = lazy(() => import('@pages/planes/PlanesPage'));
const NotFoundPage     = lazy(() => import('@pages/NotFoundPage'));

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
          <Route path="/login"    element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />
          {/* Verificacion de certificados: accesible sin sesion */}
          <Route path="/verify/:id" element={<VerifyPage />} />
        </Route>

        {/* Rutas protegidas — requieren sesion */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard"    element={<DashboardPage />} />
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
