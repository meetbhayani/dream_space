const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-8 lg:px-12">
        <a href="#top" className="text-sm uppercase tracking-[0.35em] text-gold">Dream Space</a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.25em] text-muted transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-gold/30 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-gold hover:text-black"
        >
          Consult
        </a>
      </div>
    </header>
  );
}
