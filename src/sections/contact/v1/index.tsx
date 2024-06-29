import { contactSectionData } from '@/data/contact-section/v1';
import { ImageProps, blurDataUrl } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { BREAKPOINTS } from '@/src/themes/interface';
import Image from 'next/image';

export interface ContactSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  image: Omit<ImageProps, 'width' | 'height'>;
}

export function ContactSection() {
  const { sectionHeading, image } = contactSectionData;
  return (
    <section className="section-padding-primary">
      <div className="relative py-[60px]">
        {/* Image area  */}
        <div className="absolute left-0 top-0 z-1 h-full w-full overflow-hidden md:w-[56%] md:rounded-r-5">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes={`(min-width: ${BREAKPOINTS.md}) 60vw, 100vw`}
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </div>

        <Container>
          <div className="ml-auto md:w-1/2">
            <div className="relative z-[2] rounded-5 bg-white p-10 shadow-1 dark:bg-accent-700 lg:p-[280px]">
              <div className="absolute right-20 top-5">
                <SectionHeading {...sectionHeading} />
              </div>
              <div className="absolute bottom-5 left-20 w-full bg-black bg-opacity-0 p-4 text-left text-white">
                <ul className="text-lg font-bold">
                  <li>- Sonora</li>
                  <li>- Chihuahua</li>
                  <li>- Guanajuato</li>
                  <li>- Guadalajara</li>
                  <li>- Monterrey</li>
                  <li>- Baja California</li>
                  <li>- Sinaloa</li>
                  <li>- Guerrero</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
