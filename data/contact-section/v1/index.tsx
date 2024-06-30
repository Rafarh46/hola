import { TeamSectionProps } from '@/src/sections/team/v1';

export const teamSectionData: TeamSectionProps = {
  sectionHeading: {
    subtitle: 'Nuestros Productos',
    title: 'Equipando tu seguridad con tecnología de vanguardia',
  },
  cards: [
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-1.png',
        alt: 'DETECTORS BEAM',
      },
      socials: [],
      name: 'DETECTORS BEAM',
      about: '',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-2.png',
        alt: 'DETECTORES HUMO',
      },
      socials: [],
      name: 'DETECTORES HUMO',
      about: '(CONVENCIONAL E INTELIGENTE)',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-3.png',
        alt: 'ALARMAS PULL',
      },
      socials: [],
      name: 'ALARMAS PULL',
      about: '',
    },
  ],
};