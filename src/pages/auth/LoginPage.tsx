import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeoHead } from '@/seo/SeoHead';
import { Button } from '@components/ui/Button';
import { supabase } from '@lib/supabase/client';

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError('Email o contrasena incorrectos. Verifica tus datos.');
    } else {
      navigate('/dashboard');
    }

    setLoading(false);
  }

  return (
    <>
      <SeoHead
        title="Iniciar sesion"
        description="Accede a tu plataforma EduTech Innova"
        canonical="/login"
        noIndex
      />

      <div className="auth-page">
        <div className="auth-card">
          <h1 className="auth-card__title">EduTech Innova</h1>
          <p className="auth-card__subtitle">Ingresa a tu cuenta</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="email" className="form-field__label">
                Correo electronico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-field__input"
                placeholder="director@micolegio.edu.pe"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-field">
              <label htmlFor="password" className="form-field__label">
                Contrasena
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-field__input"
                required
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p className="form-error" role="alert">{error}</p>
            )}

            <Button type="submit" loading={loading} className="auth-card__submit">
              Ingresar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
