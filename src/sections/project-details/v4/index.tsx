import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaDollarSign,
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
    icon: <FaRegUser />,
    subHeading: '',
    heading: 'Inspección',
  },
  {
    icon: <FaDollarSign />,
    subHeading: '',
    heading: 'Mantenimiento ',
  },
  {
    icon: <FaRegFolderOpen />,
    subHeading: '',
    heading: 'Pruebas',
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
                src="/assets/images/project-details/imag2.jpg"
                alt="project 2"
                className={commonImageClasses}
                fill
                sizes="100vw"
              />
            </div>
            <div className="relative col-start-2 row-start-1 row-end-3">
              <Image
                src="/assets/images/project-details/imag.jpg"
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
            En SDI&#39;H, ofrecemos un servicio de mantenimiento confiable y
            actualizado conforme a las normas más recientes para la inspección,
            prueba y mantenimiento de sistemas contra incendios y seguridad.
            Nuestro personal está capacitado continuamente para garantizar que
            los servicios se realicen bajo los estándares más estrictos,
            brindando la confianza y seguridad que nuestros clientes requieren.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Contamos con un riguroso control de calidad que supervisa cada etapa
            del proceso, asegurando resultados óptimos y consistentes. Esto,
            junto con nuestro compromiso con la excelencia, nos permite ofrecer
            un servicio que no solo cumple, sino que supera las expectativas de
            nuestros clientes.
          </p>
          <div className="my-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8 2xl:grid-cols-3">
            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="flex-none text-base/[1] text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                  Servicios correctivos
                </h3>
              </div>
              <p style={{ textAlign: 'justify' }}>
                El mantenimiento correctivo se enfoca en reparar componentes
                dañados del sistema para asegurar su funcionamiento óptimo. Un
                adecuado mantenimiento preventivo reduce la necesidad de
                intervenciones correctivas, que incluyen la corrección de fallas
                a tierra, sustitución de dispositivos de alarma y detección
                dañados, reparación de fugas, diagnóstico y solución de fallas
                en tableros de control, reparación de bombas y motores contra
                incendios (diésel y eléctricos), pruebas de eficiencia y
                validación de sistemas instalados. Estos servicios garantizan la
                eficiencia y confiabilidad continuas de sus sistemas de
                protección contra incendios.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="flex-none text-base/[1] text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                  Servicios Preventivos
                </h3>
              </div>
              <p style={{ textAlign: 'justify' }}>
                entendemos la importancia del mantenimiento preventivo para
                garantizar el óptimo funcionamiento de los sistemas contra
                incendios. Nuestro servicio de mantenimiento preventivo incluye
                inspecciones regulares, pruebas de funcionamiento y ajustes
                según las normativas NFPA y FM. Nos aseguramos de que todos los
                componentes, desde alarmas hasta rociadores y sistemas
                hidráulicos, estén en condiciones óptimas para responder
                eficazmente ante una emergencia. Con un enfoque proactivo,
                nuestro equipo técnico capacitado identifica y corrige posibles
                fallas antes de que se conviertan en problemas mayores,
                proporcionando tranquilidad y seguridad a nuestros clientes.{' '}
              </p>

              <p></p>
            </div>
            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="flex-none text-base/[1] text-primary">
                  <FaCheckCircle />
                </span>
                <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                  Validación y Ejecución
                </h3>
              </div>
              <p style={{ textAlign: 'justify' }}>
                Nos encargamos de validar y asegurar la correcta ejecución de
                los servicios de inspección, prueba y mantenimiento de los
                sistemas contra incendios. Nos aseguramos de que estos servicios
                se realicen puntualmente y en conformidad con las normativas
                aplicables, como NFPA, FM y NOM.
              </p>
              <p></p>
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
