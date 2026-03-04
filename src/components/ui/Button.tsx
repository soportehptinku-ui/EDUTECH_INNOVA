import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@lib/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

/**
 * Boton reutilizable con variantes de estilo y estado de carga.
 * Uso: <Button variant="primary" size="md" loading={isSubmitting}>Guardar</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, disabled, className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        className={cn(
          'btn',
          `btn--${variant}`,
          `btn--${size}`,
          loading && 'btn--loading',
          className
        )}
        {...rest}
      >
        {loading ? <span className="btn__spinner" aria-hidden="true" /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
