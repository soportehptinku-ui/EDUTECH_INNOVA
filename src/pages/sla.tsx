<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SLA y Garantías de Servicio — EduTech Innova</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
body{font-family:'DM Sans',Arial,sans-serif;background:#F4F7F6;color:#0B1F2A;-webkit-font-smoothing:antialiased}
:root{--teal:#00897B;--aqua:#26C6B0;--deep:#0D2B3E;--gold:#F5A623;--ink:#0B1F2A;--gray:#6B8080;--border:rgba(0,137,123,0.18)}
nav{background:#fff;border-bottom:1px solid var(--border);padding:0 5%;height:64px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.nav-logo{font-family:'Fraunces',Georgia,serif;font-weight:900;font-size:1.25rem;color:var(--deep);text-decoration:none}
.nav-logo em{color:var(--teal);font-style:normal}
.nav-back{font-size:0.82rem;color:var(--teal);text-decoration:none;display:flex;align-items:center;gap:0.4rem;font-weight:500}
.page-wrap{max-width:900px;margin:0 auto;padding:3rem 5% 5rem}
.page-header{margin-bottom:2.5rem;padding-bottom:1.5rem;border-bottom:2px solid var(--border)}
.page-label{font-size:0.7rem;font-weight:600;color:var(--teal);text-transform:uppercase;letter-spacing:2px;margin-bottom:0.5rem}
.page-title{font-family:'Fraunces',Georgia,serif;font-size:clamp(1.6rem,3vw,2.2rem);font-weight:900;color:var(--deep);line-height:1.15;margin-bottom:0.5rem}
.page-date{font-size:0.8rem;color:var(--gray)}
.doc-section{margin-bottom:2.5rem}
.doc-section h2{font-family:'Fraunces',Georgia,serif;font-size:1.05rem;font-weight:700;color:var(--deep);margin-bottom:0.75rem;padding-left:0.75rem;border-left:3px solid var(--aqua)}
.doc-section p,.doc-section li{font-size:0.88rem;color:var(--gray);line-height:1.8;margin-bottom:0.5rem}
.doc-section ul{padding-left:1.25rem}
.highlight-box{background:linear-gradient(135deg,var(--deep),#0a3d4f);color:#fff;border-radius:12px;padding:1.25rem 1.5rem;margin:1.5rem 0}
.highlight-box h3{font-family:'Fraunces',Georgia,serif;font-size:0.95rem;font-weight:700;color:var(--aqua);margin-bottom:0.4rem}
.highlight-box p{font-size:0.83rem;color:rgba(255,255,255,0.7);line-height:1.7;margin:0}
.enterprise-box{background:linear-gradient(135deg,#1a0a00,#3d1a00);border:1.5px solid var(--gold);border-radius:14px;padding:1.5rem 1.75rem;margin:1.5rem 0}
.enterprise-box h3{font-family:'Fraunces',Georgia,serif;font-size:1rem;font-weight:900;color:var(--gold);margin-bottom:0.5rem}
.enterprise-box p{font-size:0.85rem;color:rgba(255,255,255,0.7);line-height:1.75;margin-bottom:0.4rem}
.enterprise-box p:last-child{margin:0}
table{width:100%;border-collapse:collapse;margin-top:0.75rem;font-size:0.85rem;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(11,31,42,0.07)}
th{background:var(--deep);color:#fff;padding:0.7rem 0.9rem;text-align:left;font-weight:600;font-size:0.78rem;text-transform:uppercase;letter-spacing:0.5px}
td{padding:0.65rem 0.9rem;border-bottom:1px solid var(--border);color:var(--gray);font-size:0.83rem}
tr:last-child td{border-bottom:none}
tr:nth-child(even) td{background:rgba(0,137,123,0.03)}
.plan-badge{display:inline-block;font-size:0.65rem;font-weight:700;padding:0.2rem 0.6rem;border-radius:100px;text-transform:uppercase;letter-spacing:0.8px}
.badge-basic{background:rgba(0,137,123,0.1);color:var(--teal)}
.badge-start{background:rgba(0,137,123,0.15);color:var(--teal)}
.badge-gold{background:rgba(245,166,35,0.15);color:#B7770D}
.badge-pro{background:rgba(38,198,176,0.15);color:#00695C}
.badge-enterprise{background:rgba(255,215,0,0.15);color:#7D5A00;border:1px solid rgba(245,166,35,0.3)}
.td-green{color:#2e7d32;font-weight:600}
.td-gold{color:#B7770D;font-weight:600}
footer.doc-footer{background:var(--deep);color:rgba(255,255,255,0.45);text-align:center;padding:1.5rem 5%;font-size:0.78rem}
footer.doc-footer a{color:var(--aqua);text-decoration:none}
@media(max-width:600px){table{font-size:0.75rem}th,td{padding:0.5rem 0.6rem}}
</style>
</head>
<body>
<nav>
  <a href="index.html" class="nav-logo">EduTech<em>Innova</em></a>
  <a href="index.html" class="nav-back">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
    Volver al inicio
  </a>
</nav>

<div class="page-wrap">
  <div class="page-header">
    <div class="page-label">Acuerdo de Nivel de Servicio</div>
    <h1 class="page-title">SLA y Garantías de Servicio</h1>
    <p class="page-date">Versión vigente: 1 de enero de 2025 &mdash; EduTech Innova S.A.C.</p>
  </div>

  <div class="highlight-box">
    <h3>¿Qué es un SLA?</h3>
    <p>Un Acuerdo de Nivel de Servicio (SLA, por sus siglas en inglés) es el compromiso formal que EduTech Innova asume con cada institución respecto a la disponibilidad de la plataforma, los tiempos de respuesta ante incidencias y las compensaciones aplicables en caso de incumplimiento.</p>
  </div>

  <div class="doc-section">
    <h2>1. Disponibilidad garantizada por plan</h2>
    <table>
      <thead>
        <tr>
          <th>Plan</th>
          <th>Disponibilidad mensual</th>
          <th>Tiempo de respuesta (incidencia crítica)</th>
          <th>Soporte</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="plan-badge badge-basic">BASIC</span></td>
          <td>95%</td>
          <td>48 horas</td>
          <td>Email y WhatsApp (L–V horario laboral)</td>
        </tr>
        <tr>
          <td><span class="plan-badge badge-start">START</span></td>
          <td>96%</td>
          <td>24 horas</td>
          <td>Email y WhatsApp prioritario (L–V)</td>
        </tr>
        <tr>
          <td><span class="plan-badge badge-gold">GOLD</span></td>
          <td>98%</td>
          <td>12 horas</td>
          <td>WhatsApp + ticket web (L–S horario ampliado)</td>
        </tr>
        <tr>
          <td><span class="plan-badge badge-pro">PRO</span></td>
          <td class="td-green">99%</td>
          <td class="td-green">6 horas</td>
          <td>Soporte 24/7 WhatsApp + teléfono</td>
        </tr>
        <tr>
          <td><span class="plan-badge badge-enterprise">ENTERPRISE</span></td>
          <td class="td-gold">99.5%</td>
          <td class="td-gold">&lt; 2 horas (con penalidad)</td>
          <td>Account Manager dedicado + soporte 24/7</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="enterprise-box">
    <h3>Cláusula de penalidad — Plan ENTERPRISE</h3>
    <p>Las instituciones con Plan ENTERPRISE tienen garantizado un tiempo de respuesta ante incidencias críticas inferior a <strong>2 horas calendario</strong>, las 24 horas del día, los 7 días de la semana, incluyendo feriados.</p>
    <p>En caso de que EduTech Innova no cumpla este tiempo de respuesta en una incidencia crítica debidamente documentada, la institución tendrá derecho a una <strong>compensación equivalente al 10% de la mensualidad vigente</strong> por cada incidencia incumplida, acreditable en la siguiente facturación.</p>
    <p>La penalidad máxima acumulable por mes calendario no podrá exceder el 50% del valor de la mensualidad. La solicitud de compensación deberá realizarse dentro de los 5 días hábiles siguientes al incidente, mediante comunicación escrita a <a href="mailto:sla@edutechinnova.pe" style="color:var(--gold)">sla@edutechinnova.pe</a>.</p>
  </div>

  <div class="doc-section">
    <h2>2. Clasificación de incidencias</h2>
    <table>
      <thead>
        <tr><th>Nivel</th><th>Descripción</th><th>Ejemplos</th></tr>
      </thead>
      <tbody>
        <tr>
          <td style="color:#c62828;font-weight:700">Crítica</td>
          <td>Plataforma inaccesible o funcionalidad principal caída</td>
          <td>Login no funciona, pagos no procesan, datos no cargan</td>
        </tr>
        <tr>
          <td style="color:#e65100;font-weight:700">Alta</td>
          <td>Funcionalidad importante degradada</td>
          <td>Lentitud severa, reportes con errores, notificaciones no enviadas</td>
        </tr>
        <tr>
          <td style="color:#f57f17;font-weight:700">Media</td>
          <td>Funcionalidad secundaria con fallas</td>
          <td>Error en exportación de PDF, filtros incorrectos</td>
        </tr>
        <tr>
          <td style="color:#2e7d32;font-weight:700">Baja</td>
          <td>Mejoras, consultas o funcionalidades opcionales</td>
          <td>Solicitud de nueva funcionalidad, ajuste de configuración</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="doc-section">
    <h2>3. Exclusiones del SLA</h2>
    <p>Las garantías de disponibilidad no aplican cuando la interrupción se deba a:</p>
    <ul>
      <li>Mantenimientos programados notificados con al menos 48 horas de anticipación</li>
      <li>Fuerza mayor o caso fortuito (desastres naturales, cortes masivos de internet en Perú)</li>
      <li>Fallas en la infraestructura de terceros fuera del control de EduTech Innova (proveedores de nube, telecomunicaciones)</li>
      <li>Uso incorrecto o no autorizado de la plataforma por parte de la institución</li>
      <li>Ataques de denegación de servicio (DDoS) de origen externo</li>
    </ul>
  </div>

  <div class="doc-section">
    <h2>4. Medición de disponibilidad</h2>
    <p>La disponibilidad se mide mensualmente como el porcentaje de tiempo en que la plataforma está operativa durante el mes calendario:</p>
    <p><strong>Disponibilidad (%) = [(Total horas mes − Horas caída no programada) / Total horas mes] × 100</strong></p>
    <p>EduTech Innova publica el estado operativo en tiempo real en <a href="#" style="color:var(--teal)">status.edutechinnova.pe</a> (próximamente).</p>
  </div>

  <div class="doc-section">
    <h2>5. Proceso de reporte de incidencias</h2>
    <ul>
      <li>Reportar incidencias a: <a href="mailto:soporte@edutechinnova.pe" style="color:var(--teal)">soporte@edutechinnova.pe</a> o vía WhatsApp según plan</li>
      <li>Incluir: descripción del problema, plan contratado, hora de inicio, capturas de pantalla si aplica</li>
      <li>EduTech Innova confirmará recepción y asignará número de ticket</li>
      <li>Se notificará el avance y resolución por el mismo canal</li>
    </ul>
  </div>

  <div class="doc-section">
    <h2>6. Vigencia y actualizaciones</h2>
    <p>Este SLA es parte integrante del contrato de servicio. EduTech Innova se reserva el derecho de actualizarlo con previo aviso de 30 días a las instituciones afectadas. La versión vigente siempre estará disponible en esta página.</p>
  </div>
</div>

<footer class="doc-footer">
  <p>&copy; 2025 EduTech Innova S.A.C. &mdash; <a href="index.html">Inicio</a> &middot; <a href="terminos.html">Términos</a> &middot; <a href="privacidad.html">Privacidad</a> &middot; <a href="datos.html">Datos</a></p>
</footer>
</body>
</html>
