import { clsx, type ClassValue } from 'clsx';

/**
 * Combina clases de Tailwind CSS de forma condicional.
 * Uso: cn('base-class', condition && 'conditional-class', { 'another': isActive })
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
