import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/footer/Footer';
import { HeroSection } from '@/components/hero/HeroSection';
import { Navbar } from '@/components/navigation/Navbar';
import { PageContainer } from '@/components/layout/PageContainer';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <main className="bg-background text-white">
      <Navbar />
      <PageContainer>
        <HeroSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </PageContainer>
      <Footer />
    </main>
  );
}
