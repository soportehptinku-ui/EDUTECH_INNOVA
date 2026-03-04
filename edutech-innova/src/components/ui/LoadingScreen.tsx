/**
 * Pantalla de carga global.
 * Se muestra mientras se verifica la sesion o se carga un modulo con lazy import.
 */
export function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-label="Cargando">
      <div className="loading-screen__spinner" />
      <p className="loading-screen__text">Cargando...</p>
    </div>
  );
}
