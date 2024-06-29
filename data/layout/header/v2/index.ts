import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '6623380627',
    mail: 'info@example.com',
    address: '83 De Las Guitarras, Hermosillo, Sonora',
  },
  ctaBtn: {
    href: '/contact',
    label: 'Cotización',
    openNewTab: false,
  },
  menuItems: menuItemsProps,
};
