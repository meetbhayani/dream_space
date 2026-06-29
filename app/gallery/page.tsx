import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { galleryService } from '@/services/gallery.service';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse our gallery of luxury interior design projects — living rooms, kitchens, bedrooms, and bespoke details crafted by Dream Space Studio.',
  openGraph: {
    title: 'Luxury Interior Design Gallery | Dream Space Studio',
    description: 'Visual inspiration from our portfolio of premium interior design projects.',
  },
};

export default async function GalleryPage() {
  const items = await galleryService.getGalleryItems({});
  const categories = await galleryService.getCategories();

  return (
    <main className="bg-background text-white">
      <Section className="mt-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Gallery</p>
            <h1 className="text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Visual inspiration
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              A curated selection of spaces, materials, and details from our projects.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap gap-3">
            <a
              href="/gallery"
              className="rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold"
            >
              All
            </a>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/gallery?category=${cat.slug}`}
                className="rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-muted transition hover:border-white/20 hover:text-white"
              >
                {cat.name}
              </a>
            ))}
          </div>

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="mb-6 inline-block w-full rounded-[24px] border border-white/10 bg-[#0c0c0c] p-4"
              >
                <div
                  className="aspect-[4/3] rounded-[20px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
                >
                  <div className="flex h-full items-center justify-center p-4 text-center">
                    <p className="text-xs text-muted">{item.alt}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-white">{item.title}</p>
                  {item.projectName && (
                    <p className="mt-1 text-xs text-muted">{item.projectName}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
