import { Outlet } from 'react-router-dom';

/**
 * Layout para rutas publicas: login, registro y verificacion de certificados.
 * Sin sidebar ni header autenticado.
 */
export function PublicLayout() {
  return (
    <div className="public-layout">
      <Outlet />
    </div>
  );
}
