import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaRegFolderOpen,
  FaChalkboardUser,
  FaCompassDrafting,
} from 'react-icons/fa6';

const commonImageClasses = cn('rounded-5 object-cover object-center');

interface OverviewProps {
  icon: React.ReactNode;
  subHeading: string;
  heading: string;
}

const projectOverviewList: OverviewProps[] = [
  {
    icon: <FaRegFolderOpen />,
    subHeading: '',
    heading: 'Bombas',
  },
  {
    icon: <FaChalkboardUser />,
    subHeading: '',
    heading: 'Hidrantes Rojos',
  },
  {
    icon: <FaCompassDrafting />,
    subHeading: '',
    heading: 'Rociadores',
  },
  {
    icon: <FaCompassDrafting />,
    subHeading: '',
    heading: 'Tanque de Agua',
  },
];

export function ProjectDetailsSection() {
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="grid gap-6">
          {/* Images and project overview area  */}
          <div className="mb-8 grid grid-cols-2 grid-rows-[.3fr_.3fr_1fr] gap-30px md:grid-rows-[.5fr_.5fr_1fr] lg:grid-cols-[1fr_1.19fr_1fr] lg:grid-rows-2">
            <div className="relative">
              <Image
                src="/assets/images/project-details/image-1.png"
                alt="project 1"
                className={commonImageClasses}
                fill
                sizes="100vw"
              />
            </div>
            <div className="relative row-start-2">
              <Image
                src="/assets/images/project-details/image-6.jpg"
                alt="project 2"
                className={commonImageClasses}
                fill
                sizes="100vw"
              />
            </div>
            <div className="relative col-start-2 row-start-1 row-end-3">
              <Image
                src="/assets/images/project-details/image-4.png"
                alt="project 3"
                className={commonImageClasses}
                fill
                sizes="100vw"
              />
            </div>
            <div className="col-start-1 col-end-3 row-start-3 lg:col-start-3 lg:row-start-1 lg:row-end-3">
              {projectOverviewList && projectOverviewList.length > 0 && (
                <div className="flex  h-full flex-col divide-y divide-accent-700 divide-opacity-20 rounded-5 border border-accent-700 border-opacity-20 dark:divide-accent-200 dark:divide-opacity-20 dark:border-accent-200 dark:border-opacity-20">
                  {projectOverviewList.map((item, index) => (
                    <div
                      className="flex flex-1 items-center px-5 py-6 2xl:px-10"
                      key={index}
                    >
                      <div className="flex items-center gap-5">
                        <span className="grid h-[46px] w-[46px] place-items-center rounded-full bg-primary-light/[.15] text-md text-primary-light">
                          {item.icon}
                        </span>
                        <div className="text-accent-700 dark:text-white">
                          <p className="text-sm leading-[1.6]">
                            {item.subHeading}
                          </p>
                          <h3 className="mt-2 font-secondary text-md font-bold leading-[1.5] ">
                            {item.heading}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <p style={{ textAlign: 'justify' }}>
            En SDI'H, nos especializamos en el diseño, instalación y
            mantenimiento de sistemas hidráulicos integrales para la protección
            contra incendios. Nuestros servicios abarcan desde la instalación de
            bombas de agua de alta capacidad hasta la configuración de redes de
            hidrantes estratégicamente ubicados. Utilizamos rociadores
            automáticos y sistemas de diluvio que se activan rápidamente en caso
            de incendio, asegurando una respuesta efectiva y controlada. Además,
            implementamos tanques de agua dedicados para garantizar un
            suministro constante y adecuado de agua en situaciones de
            emergencia, cumpliendo con las normativas nacionales e
            internacionales para asegurar la máxima protección y seguridad.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Nuestro equipo de ingenieros y técnicos altamente capacitados se
            encarga de cada detalle del sistema hidráulico, desde el diseño
            inicial hasta la instalación y puesta en marcha. Realizamos pruebas
            rigurosas de eficiencia y mantenemos los sistemas de manera
            preventiva para asegurar su operatividad óptima en todo momento. Con
            más de 17 años de experiencia en el sector, hemos trabajado con
            diversos sectores industriales, comerciales y residenciales,
            proporcionando soluciones personalizadas y confiables que se adaptan
            a las necesidades específicas de cada cliente y proyecto.
          </p>
          <div className="my-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8 2xl:grid-cols-3">
            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="flex-none text-base/[1] text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                  Bombas de agua
                </h3>
              </div>
              <p style={{ textAlign: 'justify' }}>
                En SDIH, ofrecemos bombas de agua robustas y eficientes
                diseñadas específicamente para sistemas contra incendios. Estas
                bombas son fundamentales para garantizar un suministro constante
                y adecuado de agua a presión en caso de emergencia, asegurando
                una respuesta rápida y efectiva ante incendios. Nuestras bombas
                están fabricadas con materiales resistentes y tecnología
                avanzada para proporcionar fiabilidad y durabilidad en
                condiciones exigentes.{' '}
              </p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>

            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="flex-none text-base/[1] text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                  Red de Hidrantes
                </h3>
              </div>
              <p style={{ textAlign: 'justify' }}>
                Implementamos redes de hidrantes estratégicamente distribuidos
                en instalaciones comerciales, industriales y residenciales para
                facilitar el acceso rápido a agua en caso de incendio. Nuestras
                redes de hidrantes están diseñadas conforme a normativas
                internacionales y locales, asegurando la disponibilidad de
                puntos de conexión seguros y eficientes para los equipos de
                bomberos y personal de emergencia.{' '}
              </p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="flex-none text-base/[1] text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                  Rociadores y Sistemas de diluvio:
                </h3>
              </div>
              <p style={{ textAlign: 'justify' }}>
                Ofrecemos sistemas avanzados tanto de rociadores automáticos
                como de diluvio para la supresión efectiva de incendios.
                Nuestros rociadores automáticos son esenciales para la detección
                y control inicial de incendios en áreas específicas de
                edificaciones, activándose automáticamente para dispersar agua
                uniformemente y extinguir rápidamente el fuego, minimizando
                daños y protegiendo vidas y propiedades. Por otro lado, nuestros
                sistemas de diluvio están diseñados para descargas rápidas y
                masivas de agua en áreas de alto riesgo, activándose
                automáticamente ante la detección de incendios para crear una
                barrera efectiva que protege activos críticos y estructuras
                importantes.{' '}
              </p>
            </div>
          </div>

          <p></p>

          {/* Pagination Area  */}
          <div className="mb-2 mt-5 h-px bg-accent-900/20 dark:bg-white"></div>
          <div className="flex flex-col justify-between gap-x-16 gap-y-8 md:flex-row md:items-center">
            {/* Previous  */}
            <CustomLink
              href="#"
              className="group grid max-w-[255px] gap-3 text-accent-700 dark:text-white"
            >
              <div className="flex items-center  gap-2.5">
                <span className="transition-colors duration-300 group-hover:text-primary">
                  <FaArrowLeftLong />
                </span>
                <p className="text-base font-bold uppercase leading-[2] tracking-wide"></p>
              </div>
              <h3 className="text-md font-medium leading-[1.5]"> </h3>
            </CustomLink>

            {/* Next  */}
            <CustomLink
              href="#"
              className="group grid max-w-[255px] gap-3 text-right text-accent-700 dark:text-white max-md:self-end"
            >
              <div className="flex items-center justify-end gap-2.5">
                <p className="text-base font-bold uppercase leading-[2] tracking-wide"></p>
                <span className="transition-colors duration-300 group-hover:text-primary">
                  <FaArrowRightLong />
                </span>
              </div>
              <h3 className="text-md font-medium leading-[1.5]"> </h3>
            </CustomLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
