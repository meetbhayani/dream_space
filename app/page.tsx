import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/hero/HeroSection';
import { Navbar } from '@/components/navigation/Navbar';
import { PageContainer } from '@/components/layout/PageContainer';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <main className="bg-background text-white">
      <Navbar />
      <PageContainer>
        <HeroSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </PageContainer>
    </main>
  );
}
