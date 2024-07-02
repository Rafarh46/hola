import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'Servicios',
    title: 'Protegiendo lo que más importa.',
  },
  isWave: false,
  works: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/1.png',
        alt: 'portfolio-1',
      },
      title: 'ALARMAS Y DETECCIÓN',
      description: '',
    },
    {
      slug: '/project/double',
      image: {
        src: '/assets/images/project/2.png',
        alt: 'portfolio-1',
      },
      title: 'SISTEMAS HIDRÁULICOS',
      description: '',
    },
    {
      slug: '/project/fourth',
      image: {
        src: '/assets/images/project/4.png',
        alt: 'portfolio-1',
      },
      title: '\u00A0 \u00A0 \u00A0 \u00A0 MANTENIMIENTO  \u00A0 \u00A0 \u00A0 \u00A0',
      
      description: '',
    },
  ],
};
