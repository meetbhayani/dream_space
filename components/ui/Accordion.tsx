'use client';

import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`space-y-4 ${className}`.trim()}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left text-white transition hover:bg-white/5"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium">{item.title}</span>
              <span className="text-sm uppercase tracking-[0.35em] text-gold">{isOpen ? 'Close' : 'Open'}</span>
            </button>
            {isOpen ? <div className="border-t border-white/10 px-6 py-5 text-muted">{item.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
