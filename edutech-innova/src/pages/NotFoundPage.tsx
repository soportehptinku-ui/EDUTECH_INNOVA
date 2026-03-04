import { Link } from 'react-router-dom';
import { SeoHead } from '@/seo/SeoHead';

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Pagina no encontrada"
        description="La pagina que buscas no existe."
        noIndex
      />
      <div className="not-found">
        <h1 className="not-found__code">404</h1>
        <p className="not-found__message">Pagina no encontrada</p>
        <Link to="/dashboard" className="not-found__link">
          Volver al panel principal
        </Link>
      </div>
    </>
  );
}
