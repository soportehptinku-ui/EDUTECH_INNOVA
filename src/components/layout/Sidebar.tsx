import { NavLink } from 'react-router-dom';
import { cn } from '@lib/utils/cn';

interface NavItem {
  to: string;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/dashboard',    label: 'Panel principal', icon: 'grid' },
  { to: '/cuota',        label: 'Cuota e impresion', icon: 'printer' },
  { to: '/cobranza',     label: 'Cobranza',          icon: 'credit-card' },
  { to: '/certificados', label: 'Certificados',      icon: 'award' },
  { to: '/asistente',    label: 'Asistente IA',      icon: 'message-square' },
  { to: '/crm',          label: 'CRM y NPS',         icon: 'users' },
  { to: '/planes',       label: 'Mi plan',           icon: 'package' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__brand-name">EduTech Innova</span>
      </div>

      <nav className="sidebar__nav" aria-label="Navegacion principal">
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn('sidebar__link', isActive && 'sidebar__link--active')
            }
          >
            <span className="sidebar__link-icon" aria-hidden="true" data-icon={item.icon} />
            <span className="sidebar__link-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
