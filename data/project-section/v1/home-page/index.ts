import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'Servicios',
    title: 'Construyendo seguridad, proyecto a proyecto',
  },
  isWave: true,
  works: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/1.png',
        alt: 'portfolio-1',
      },
      title: 'ALARMA Y DETECCIÓN',
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
      title: 'MANTENIMIENTO',
      description: '',
    },
  ],
};
