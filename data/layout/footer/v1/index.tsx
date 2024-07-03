import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'En SDIH, ofrecemos soluciones integrales de protección contra incendios con más de 17 años de experiencia, garantizando seguridad y satisfacción en diversos sectores.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/',
      },
    ],
  },
  columnOne: {
    title: '',
    links: [
      {
        label: '',
        href: '/',
        openNewTab: false,
      },]
  },
  columnTwo: {
    title: 'Dirección',
    location: 'Hermosillo, Sonora ',
    mails: ['sergiogtz@sdih.com.mx'],
    phoneNumbers: ['6623380627'],
  },
  columnThree: {title: '',
    blogs: [
    ],
    button: {
      label: 'Contacto',
      href: '/contact',
      }
    ,},
  footerBottom: {
    copyrightText: '© SDIH 2024 | All Rights Reserved',
    links: [
      {
        label: '',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
