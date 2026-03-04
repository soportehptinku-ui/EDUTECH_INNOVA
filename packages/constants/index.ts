import type { NombrePlan, Plan } from '../types';

// ─── Precios y cuotas de cada plan ────────────────────────────
export const PLANES: Record<NombrePlan, Plan> = {
  BASIC: {
    nombre: 'BASIC',
    precio_mensual: 299,
    cuota_bn: 500,
    cuota_color: 0,
    cuota_a3_color: 0,
    sedes_incluidas: 1,
    almacenamiento_gb: 10,
    tiene_blockchain: false,
    tiene_ia: false,
    tiene_economia_circular: false,
  },
  START: {
    nombre: 'START',
    precio_mensual: 699,
    cuota_bn: 2000,
    cuota_color: 100,
    cuota_a3_color: 0,
    sedes_incluidas: 3,
    almacenamiento_gb: 50,
    tiene_blockchain: true,
    tiene_ia: false,
    tiene_economia_circular: false,
  },
  PRO: {
    nombre: 'PRO',
    precio_mensual: 899,
    cuota_bn: 3000,
    cuota_color: 500,
    cuota_a3_color: 0,
    sedes_incluidas: 2,
    almacenamiento_gb: 100,
    tiene_blockchain: true,
    tiene_ia: true,
    tiene_economia_circular: false,
  },
  GOLD: {
    nombre: 'GOLD',
    precio_mensual: 1299,
    cuota_bn: 1200,
    cuota_color: 5000,
    cuota_a3_color: 300,
    sedes_incluidas: 2,
    almacenamiento_gb: 200,
    tiene_blockchain: true,
    tiene_ia: true,
    tiene_economia_circular: false,
  },
  ENTERPRISE: {
    nombre: 'ENTERPRISE',
    precio_mensual: 1499,
    cuota_bn: 10000,
    cuota_color: 1000,
    cuota_a3_color: 100,
    sedes_incluidas: Infinity,
    almacenamiento_gb: null, // Ilimitado
    tiene_blockchain: true,
    tiene_ia: true,
    tiene_economia_circular: true,
  },
};

// ─── Precios de paginas adicionales por plan (en soles) ───────
export const PRECIOS_EXTRA: Record<NombrePlan, { bn: number; color: number }> = {
  BASIC:      { bn: 0.15, color: 0.50 },
  START:      { bn: 0.10, color: 0.40 },
  PRO:        { bn: 0.10, color: 0.35 },
  GOLD:       { bn: 0.10, color: 0.35 },
  ENTERPRISE: { bn: 0.08, color: 0.35 },
};

// ─── Reglas de negocio globales ────────────────────────────────
export const REGLAS = {
  // Porcentaje de alerta de cuota
  UMBRAL_ALERTA_CUOTA: 0.8,
  // Maximo de paginas acumulables en plan Enterprise (no-rollover excepto Enterprise)
  ENTERPRISE_MAX_ACUMULADO: 2000,
  // Meses de vigencia del saldo acumulado Enterprise
  ENTERPRISE_MESES_VIGENCIA: 2,
  // Comision FinTech para recargos de cobranza
  COMISION_FINTECH: 0.025,
  // Dia del mes para reset de cuota
  DIA_RESET_CUOTA: 1,
  // Dia del mes para envio de encuesta NPS
  DIA_ENVIO_NPS: 25,
} as const;

// ─── Colores de marca ─────────────────────────────────────────
export const BRAND_COLORS = {
  teal:   '#028090',
  tealDk: '#015F6A',
  tealLt: '#E0F7FA',
  mint:   '#00C9B1',
  dark:   '#0D2B30',
  accent: '#F5A623',
} as const;
