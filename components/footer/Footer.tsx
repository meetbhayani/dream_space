import Link from 'next/link';

const footerLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/95 py-12 text-sm text-muted">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 md:px-8 lg:px-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Dream Space Studio</p>
          <p>Luxury interior design and architectural storytelling for timeless homes and immersive spaces.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm uppercase tracking-[0.25em] text-muted transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
