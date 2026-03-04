import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '@lib/supabase/client';

interface AuthState {
  session: Session | null;
  loading: boolean;
}

/**
 * Hook de autenticacion.
 * Expone la sesion activa y un flag de carga inicial.
 * Se suscribe a cambios de sesion (login, logout, refresh de token).
 */
export function useAuth(): AuthState {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtiene la sesion actual al montar el componente
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    // Escucha cambios: login, logout, token refresh
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return { session, loading };
}
