import { TestimonialSectionProps } from '@/src/sections/testimonial/v1';

export const testimonialSectionData: TestimonialSectionProps = {
  sectionHeading: {
    subtitle: 'Testimonios de Clientes',
    title: 'Tu aliado de confianza',
  },
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-1.png',
          alt: 'Fundación Esposos Rodríguez',
        },
        name: 'Fundación Esposos Rodríguez',
        about: '',
      },
      speech:
        '"Trabajar con SDIH ha sido una experiencia excepcional. Su equipo de expertos en protección contra incendios no solo nos ha brindado soluciones innovadoras, sino que también ha garantizado la seguridad de nuestras instalaciones. Su compromiso con la calidad y el cumplimiento de normas es inigualable."',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-3.png',
          alt: 'MAQUILAS TETAKAWI, S.A. DE C.V.',
        },
        name: 'MAQUILAS TETAKAWI, S.A. DE C.V.',
        about: '',
      },
      speech:
        '"SDIH ha sido un aliado crucial para nuestra empresa, proporcionando servicios de diseño e instalación de sistemas contra incendios que cumplen con los más altos estándares internacionales. Su equipo siempre está disponible para ofrecer asesoramiento y mantenimiento."',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-2.png',
          alt: 'HOTEL LUCERNA HERMOSILLO',
        },
        name: 'HOTEL LUCERNA HERMOSILLO',
        about: '',
      },
      speech:
        '"Valoramos la seguridad y la tranquilidad de nuestros huéspedes. Gracias a los sistemas de protección contra incendios instalados por SDIH, podemos operar con la confianza de estar preparados para cualquier eventualidad."',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-4.png',
          alt: 'HOSPITAL SAN JOSÉ, S.A. DE C.V.',
        },
        name: 'HOSPITAL SAN JOSÉ, S.A. DE C.V.',
        about: '',
      },
      speech:
        'La seguridad de nuestros pacientes y personal es nuestra máxima prioridad. SDIH ha demostrado ser un socio invaluable, ofreciendo soluciones de protección contra incendios que son tanto efectivas como confiables.',
      rating: 5,
    },

  ],
};
