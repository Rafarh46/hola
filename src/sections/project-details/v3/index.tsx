import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaCalendarDays,
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
    heading: 'Eficiencia',
  },
  {
    icon: <FaDollarSign />,
    subHeading: '',
    heading: 'Confiabilidad',
  },
  {
    icon: <FaRegFolderOpen />,
    subHeading: '',
    heading: 'Experiencia',
  },
  {
    icon: <FaCalendarDays />,
    subHeading: '',
    heading: 'Seguridad',
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
                src="/assets/images/project-details/image-2.png"
                alt="project 2"
                className={commonImageClasses}
                fill
                sizes="100vw"
              />
            </div>
            <div className="relative col-start-2 row-start-1 row-end-3">
              <Image
                src="/assets/images/project-details/agua1.jpg"
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
            En SDI&#39;H, entendemos que una instalación confiable de sistemas contra
            incendios depende de un buen diseño que optimice recursos y asegure
            la eficiencia en la entrega del trabajo. Con más de 20 años de
            experiencia y un equipo altamente capacitado, estamos preparados
            para abordar grandes proyectos en todo el país, habiendo ganado el
            reconocimiento y la confianza de nuestros clientes.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Nuestra experiencia nos permite ofrecer un servicio de instalación
            de alta calidad que cumple con los estándares más exigentes de
            seguridad y eficiencia. Nos enorgullecemos de nuestros métodos
            precisos y eficientes, asegurando que cada sistema instalado
            funcione perfectamente y proporcione la máxima protección contra
            incendios.
          </p>

          <p style={{ textAlign: 'justify' }}>
            Para garantizar un mantenimiento eficaz y confiable, nuestro
            departamento de Servicios se especializa en la inspección, prueba y
            mantenimiento de sistemas contra incendios. Nos aseguramos de que
            cada sistema siga funcionando de manera óptima, ofreciendo
            tranquilidad y seguridad a nuestros clientes a lo largo del tiempo.
          </p>

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
