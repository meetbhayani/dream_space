import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { serviceService } from '@/services/service.service';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Premium interior design services — residential, commercial, turnkey execution, custom furniture, lighting design, and more from Dream Space Studio.',
  openGraph: {
    title: 'Luxury Interior Design Services | Dream Space Studio',
    description: 'Explore our full range of premium interior design services including bespoke residential, commercial, and turnkey solutions.',
  },
};

export default async function ServicesPage() {
  const services = await serviceService.getServices({});
  const categories = await serviceService.getCategories();

  return (
    <main className="bg-background text-white">
      <Section className="mt-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Services</p>
            <h1 className="text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              A studio-led approach to elevated interiors
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              From architecture-first residences to full turnkey delivery, every engagement is shaped around timeless detail.
            </p>
          </div>

          {categories.map((cat) => {
            const categoryServices = services.filter((s) => s.category === cat.slug);
            if (categoryServices.length === 0) return null;

            return (
              <div key={cat.id} className="mb-20">
                <h2 className="mb-2 text-2xl font-light text-white">{cat.name}</h2>
                <p className="mb-8 text-sm text-muted">{cat.description}</p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryServices.map((service) => (
                    <article
                      key={service.id}
                      className="group rounded-[24px] border border-white/10 bg-[#0c0c0c] p-6 transition hover:border-gold/30"
                    >
                      <h3 className="text-xl font-light text-white">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{service.summary ?? service.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
                        <span>Explore</span>
                        <span className="transition group-hover:translate-x-1">&rarr;</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
