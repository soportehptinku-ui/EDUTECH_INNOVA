// ─── Cuota ────────────────────────────────────────────────────
export interface CuotaMensual {
  id: string;
  institucion_id: string;
  mes: string; // 'YYYY-MM'
  paginas_bn_disponibles: number;
  paginas_bn_usadas: number;
  paginas_color_disponibles: number;
  paginas_color_usadas: number;
  paginas_acumuladas: number; // Solo plan Enterprise
  fecha_reset: string;
}

// ─── Cobranza ─────────────────────────────────────────────────
export type EstadoCobro = 'pendiente' | 'pagado' | 'vencido';

export interface Cobro {
  id: string;
  institucion_id: string;
  alumno_id: string;
  concepto: string;
  monto: number;
  estado: EstadoCobro;
  fecha_vencimiento: string;
  fecha_pago?: string;
}

export interface ResumenCobranza {
  totalCobrado: number;
  totalPendiente: number;
  porcentajeMorosidad: number;
  totalAlumnos: number;
}

// ─── Chat / IA ────────────────────────────────────────────────
export type ChatRole = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: string;
}

// ─── Certificados ─────────────────────────────────────────────
export type EstadoBlockchain = 'pendiente' | 'confirmado' | 'fallido';

export interface Certificado {
  id: string;
  institucion_id: string;
  alumno_nombre: string;
  tipo: string;
  descripcion: string;
  fecha_emision: string;
  hash_sha256: string;
  estado_blockchain: EstadoBlockchain;
  tx_hash?: string;
  qr_url: string;
}

// ─── Planes ───────────────────────────────────────────────────
export type NombrePlan = 'BASIC' | 'START' | 'PRO' | 'GOLD' | 'ENTERPRISE';

export interface Plan {
  nombre: NombrePlan;
  precio_mensual: number;
  cuota_bn: number;
  cuota_color: number;
  cuota_a3_color: number;
  sedes_incluidas: number;
  almacenamiento_gb: number | null; // null = ilimitado
  tiene_blockchain: boolean;
  tiene_ia: boolean;
  tiene_economia_circular: boolean;
}

// ─── Institucion ──────────────────────────────────────────────
export interface Institucion {
  id: string;
  nombre: string;
  ruc: string;
  plan: NombrePlan;
  logo_url?: string;
  fecha_alta: string;
  activa: boolean;
}
