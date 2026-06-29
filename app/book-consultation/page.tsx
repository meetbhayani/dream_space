import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { ConsultationForm } from '@/features/contact/components/ConsultationForm';

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: 'Schedule a consultation with Dream Space Studio. Virtual or in-person meetings available for luxury interior design projects.',
  openGraph: {
    title: 'Book a Consultation | Dream Space Studio',
    description: 'Schedule your luxury interior design consultation with Dream Space Studio.',
  },
};

export default function BookConsultationPage() {
  return (
    <main className="bg-background text-white">
      <Section className="mt-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Consultation</p>
              <h1 className="text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Book a consultation
              </h1>
              <p className="mt-6 text-lg text-muted">
                Tell us about your project and we&apos;ll schedule a time to discuss your vision.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#090909]/90 p-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
