'use client';

import { useEffect, useState } from 'react';

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isTouchDevice) return;

    const onMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[100] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/70 bg-gold/20 shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }}
    />
  );
}
