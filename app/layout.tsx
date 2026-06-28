import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dream Space Studio',
  description: 'Luxury interior design and architecture studio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
