import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SeoHead } from '@/seo/SeoHead';
import { Button } from '@components/ui/Button';
import { supabase } from '@lib/supabase/client';
import './LoginStyle.css'; // Crearemos este archivo en el siguiente paso

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) {
      setError('Email o contraseña incorrectos.');
    } else {
      navigate('/dashboard');
    }
    setLoading(false);
  }

  return (
    <>
      <SeoHead title="Ingresar — EduTech Innova" noIndex />
      
      <div className="login-container">
        {/* PANEL IZQUIERDO (DISEÑO HTML) */}
        <div className="left-panel">
          <div className="panel-content">
            <Link to="/" className="logo">EduTech<span>Innova</span></Link>
            <div className="panel-headline">
              Tu institución, <span className="accent">sin filas</span> ni papeleos
            </div>
            <p className="panel-sub">
              Gestiona todos tus pedidos de impresión desde un solo panel. Rápido, seguro y con entrega a domicilio.
            </p>
            <div className="feature-list">
              <div className="feature-item"><span>📂</span> Sube PDFs y gestiona pedidos en minutos</div>
              <div className="feature-item"><span>📊</span> Historial completo y control de gastos</div>
              <div className="feature-item"><span>🔒</span> Datos seguros con encriptación SSL</div>
            </div>
          </div>
        </div>

        {/* PANEL DERECHO (FORMULARIO REAL) */}
        <div className="right-panel">
          <div className="form-box">
            <h2>Bienvenido de vuelta</h2>
            <p className="form-subtitle">Ingresa con tu cuenta institucional</p>

            {error && <div className="alert-error">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Correo electrónico</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="admin@miinstitucion.edu.pe" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  placeholder="••••••••" 
                  required 
                />
              </div>
              <Button type="submit" loading={loading} className="btn-submit">
                Ingresar a mi panel
              </Button>
            </form>
            
            <div className="back-link">
              <Link to="/">← Volver al inicio</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
