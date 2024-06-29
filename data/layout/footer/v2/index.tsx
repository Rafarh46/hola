import { FooterSectionProps } from '@/src/layout/footer/v2';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/',
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
  columnOne: {
    title: 'Quick Links',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Sobre Nosotros',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Servicios',
        href: '/services',
        openNewTab: false,
      },
      {
        label: 'Portafolio',
        href: '/portfolio',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: '',
    links: [
      {
        label: '',
        href: '/',
        openNewTab: false,
      },
    ],
  },

  columnThree: {
    title: '',
    blogs: [
      {
        image: {
          src: '',
          alt: '',
        },
        title: '',
        date: '',
        slug: '',
      },
    ],
  },
  columnFour: {
    title: 'Contactanos',
    phoneNumber: '6623380627',
    mail: 'yourmail@gmail.com',
    location: '83 De Las Guitarras, Hermosillo, Sonora',
  },
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
