import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { ContactForm } from '@/features/contact/components/ContactForm';
import { COMPANY_INFO } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Begin your luxury interior journey with Dream Space Studio. Reach out for a consultation in ${COMPANY_INFO.address.city}.`,
  openGraph: {
    title: 'Contact Dream Space Studio | Luxury Interior Designers',
    description: `Book a consultation with Dream Space Studio, premium interior designers in ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state}.`,
  },
};

export default function ContactPage() {
  return (
    <main className="bg-background text-white">
      <Section className="mt-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
            <h1 className="text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Begin the conversation
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Share your vision and we&apos;ll craft a tailored design experience for your space.
            </p>
          </div>

          <Grid cols={1} className="gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="rounded-[32px] border border-white/10 bg-[#090909]/90 p-8">
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <p className="mb-1 text-xs uppercase tracking-[0.25em] text-gold">Email</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-white transition hover:text-gold">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <p className="mb-1 text-xs uppercase tracking-[0.25em] text-gold">Phone</p>
                <a href={`tel:${COMPANY_INFO.phone.value}`} className="text-sm text-white transition hover:text-gold">
                  {COMPANY_INFO.phone.display}
                </a>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <p className="mb-1 text-xs uppercase tracking-[0.25em] text-gold">Studio</p>
                <p className="text-sm text-white">{COMPANY_INFO.address.street}</p>
                <p className="text-sm text-muted">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <p className="mb-1 text-xs uppercase tracking-[0.25em] text-gold">Hours</p>
                <p className="text-sm text-white">{COMPANY_INFO.operatingHours.formatted}</p>
                <p className="text-sm text-muted">Sunday: Closed</p>
              </div>
            </div>
          </Grid>
        </div>
      </Section>
    </main>
  );
}
