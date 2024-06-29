import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ProjectDetailsSection } from '@/src/sections/project-details/v3';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Techlab | Project details',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Instalación"
        breadcrumbItems={[
          {
            label: 'Instalación',
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
