import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaRegFolderOpen,
  FaRegUser,
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
    subHeading: 'Normativas',
    heading: 'NPFA Asociación Nacional de Protección contra el Fuego',
  },
  {
    icon: <FaRegFolderOpen />,
    subHeading: 'Normativas',
    heading: 'NOM 002 STPS 2010 ',
  },
  {
    icon: <FaRegFolderOpen />,
    subHeading: 'Normativas',
    heading: 'Capacitador STPS',
  },
  {
    icon: <FaRegUser />,
    subHeading: 'ACREDITACIONES :',
    heading: 'CERTIFICACION DE INTEGRADOR SISTEMAS “FIRELITE Y NOTIFRE”',
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
                src="/assets/images/project-details/i1.png"
                alt="project 1"
                className={commonImageClasses}
                fill
                sizes="100vw"
              />
            </div>
            <div className="relative row-start-2">
              <Image
                src="/assets/images/project-details/image-2.png"
                alt="project 2"
                className={commonImageClasses}
                fill
                sizes="100vw"
              />
            </div>
            <div className="relative col-start-2 row-start-1 row-end-3">
              <Image
                src="/assets/images/project-details/i2.jpg"
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

          <p>
            En SDIH, ofrecemos soluciones avanzadas en sistemas de alarmas y
            detección para garantizar la seguridad y protección de sus
            instalaciones. Nos especializamos en el diseño, instalación y
            mantenimiento de sistemas de alarmas contra incendios y detección de
            humo, asegurando una respuesta rápida y eficiente ante cualquier
            emergencia. Adaptamos nuestros sistemas a las necesidades
            específicas de cada cliente, proporcionando una cobertura completa y
            eficiente desde el diseño hasta la instalación y mantenimiento.
          </p>
          <p>
            Además, nuestros servicios incluyen la actualización de sistemas
            existentes para que cumplan con las últimas normativas y
            tecnologías, así como la implementación de soluciones de monitoreo
            remoto para una supervisión constante. También ofrecemos
            capacitación al personal para el uso correcto de los sistemas,
            garantizando una respuesta adecuada en caso de emergencia. Con
            nuestro enfoque en el cumplimiento de normativas estrictas como NFPA
            y UL, brindamos a nuestros clientes la tranquilidad de saber que sus
            bienes y personal están protegidos con la tecnología más avanzada y
            confiable en alarmas y detección.
          </p>
          <div className="my-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8 2xl:grid-cols-3">
            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="flex-none text-base/[1] text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                  Sirenas
                </h3>
              </div>
              <p>
                Ofrecemos sirenas de alta calidad diseñadas para proporcionar
                alertas claras y efectivas en situaciones de emergencia.
                Nuestras sirenas destacan por su alta audibilidad, diversidad de
                tonos, volúmenes ajustables, diseño robusto que garantiza
                durabilidad incluso en condiciones adversas. Compatibles con una
                amplia variedad de sistemas de alarma contra incendios, nuestras
                sirenas son fáciles de instalar y eficientes energéticamente.
                Además, cumplen con las normativas y estándares internacionales,
                asegurando una respuesta rápida en caso de emergencia para
                proteger tanto a las personas como a la propiedad.
              </p>
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
                  Detectores
                </h3>
              </div>
              <p>
                En SDIH, ofrecemos detectores de última generación diseñados
                para proporcionar una detección precisa y temprana de humo y
                fuego. Nuestros detectores emplean tecnología avanzada, como
                detectores fotoeléctricos e inteligentes, que aseguran una
                respuesta rápida y confiable ante cualquier señal de incendio.
                Son fáciles de integrar con sistemas de alarma contra incendios
                existentes y están diseñados para una instalación simple en
                techos y paredes, garantizando su eficiencia y durabilidad en
                diversas condiciones ambientales. Cumplen con normativas
                internacionales para asegurar el cumplimiento normativo y
                proporcionan notificaciones precisas que facilitan una acción
                inmediata, protegiendo así la vida y la propiedad en cualquier
                entorno.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="flex-none text-base/[1] text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                  Pull
                </h3>
              </div>
              <p>
                En SDIH, ofrecemos dispositivos pull de alta fiabilidad
                diseñados para activar rápidamente alarmas de incendio y
                sistemas de extinción en caso de emergencia. Nuestros pulls
                están construidos para ser accesibles y fáciles de utilizar en
                situaciones críticas, asegurando una respuesta inmediata ante
                cualquier amenaza de fuego. Cumplen con las normativas y
                estándares internacionales para garantizar su eficacia y
                confiabilidad, proporcionando una medida crucial en la
                protección de vidas y activos contra incendios en todo tipo de
                instalaciones.
              </p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
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
