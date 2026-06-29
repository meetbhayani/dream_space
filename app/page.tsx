import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/footer/Footer';
import { FloatingCTA } from '@/components/navigation/FloatingCTA';
import { HeroSection } from '@/components/hero/HeroSection';
import { Navbar } from '@/components/navigation/Navbar';
import { PageContainer } from '@/components/layout/PageContainer';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <main className="bg-background text-white">
      <Navbar />
      <PageContainer>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <GallerySection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </PageContainer>
      <FloatingCTA />
      <Footer />
    </main>
  );
}
