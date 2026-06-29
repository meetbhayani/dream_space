import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';

export function GallerySection() {
  return (
    <Section id="gallery" className="mt-32">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b]/90 p-8 before:absolute before:left-1/2 before:top-10 before:h-32 before:w-32 before:-translate-x-1/2 before:rounded-full before:bg-gold/10 before:blur-3xl">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Gallery"
            title="A visual language shaped by texture, light, and restraint."
            description="The gallery captures the mood of the work: quiet materiality, carefully composed silhouettes, and a sense of modern calm."
          />
        </RevealOnScroll>

        <div className="mt-12">
          <GalleryGrid />
        </div>
      </div>
    </Section>
  );
}
