import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ProjectDetailsSection } from '@/src/sections/project-details/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SDIH | Sistemas Detección de Incendios',
  description: 'SDIH - Sistemas Detección de Incendios',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Alarmas y detección"
        breadcrumbItems={[
          {
            label: 'Alarmas y detección',
            href: '/',
          },
          {
            label: 'Detalles',
          },
        ]}
      />
      <ProjectDetailsSection />
      <Footer />
    </>
  );
}
