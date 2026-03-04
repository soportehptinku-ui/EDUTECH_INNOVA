import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

/** Formatea soles peruanos: formatCurrency(1299) => "S/ 1,299.00" */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
  }).format(amount);
}

/** Formatea porcentaje: formatPercent(0.82) => "82%" */
export function formatPercent(value: number, decimals = 0): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/** Formatea fecha ISO a legible: formatDate('2024-10-01') => "1 de octubre de 2024" */
export function formatDate(isoString: string): string {
  return format(parseISO(isoString), "d 'de' MMMM 'de' yyyy", { locale: es });
}

/** Formatea fecha corta: formatDateShort('2024-10-01') => "01/10/2024" */
export function formatDateShort(isoString: string): string {
  return format(parseISO(isoString), 'dd/MM/yyyy', { locale: es });
}

/** Formatea numero con separadores: formatNumber(10000) => "10,000" */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('es-PE').format(value);
}
