import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'En SDIH, ofrecemos soluciones integrales de protección contra incendios con más de 14 años de experiencia, garantizando seguridad y satisfacción en diversos sectores.',
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
  
  },
  columnTwo: {
    title: 'Dirección',
    location: '83 De Las Guitarras, Hermosillo, Sonora ',
    mails: ['debbie.baker@example.com', 'nevaeh.simm@example.com'],
    phoneNumbers: ['6623380627'],
  },
  columnThree: {

  },
  footerBottom: {
    copyrightText: '© SDIH 2024 | All Rights Reserved',
    
  },
};