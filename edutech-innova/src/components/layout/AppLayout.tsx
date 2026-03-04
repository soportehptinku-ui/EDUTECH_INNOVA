import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

/**
 * Layout principal para rutas autenticadas.
 * Renderiza sidebar fijo + header superior + area de contenido.
 * Outlet renderiza la pagina activa segun la ruta.
 */
export function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-layout__main">
        <Header />
        <main className="app-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
