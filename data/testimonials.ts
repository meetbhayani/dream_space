import { Testimonial } from '../types/testimonial';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Anand Patel',
    designation: 'Senior Cardiologist & Villa Owner',
    company: 'Patel Heart Institute',
    projectId: 'proj-1',
    projectName: 'The Sky Villa',
    projectSlug: 'the-sky-villa',
    rating: 5,
    review: 'Dream Space Studio translated our vision into an architectural masterpiece. The flow of light, the meticulous veneer selections, and the sheer elegance of the double-height lounge is beyond words. Truly outstanding attention to detail!',
    avatar: '/images/clients/anand-patel.jpg',
    videoUrl: 'https://youtube.com/watch?v=sky-villa-feedback-dummy',
    featured: true,
    order: 1,
    approved: true,
    createdAt: '2025-11-26T12:00:00Z'
  },
  {
    id: 'test-2',
    clientName: 'Meera Shah',
    designation: 'Managing Director',
    company: 'Avant-Garde Retail Group',
    rating: 5,
    review: 'Their turnkey execution service is phenomenal. As business owners, we did not have time to monitor vendors. Dream Space delivered the office showroom space exactly as per the 3D renders on the exact week promised.',
    avatar: '/images/clients/meera-shah.jpg',
    featured: true,
    order: 2,
    approved: true,
    createdAt: '2026-02-14T10:00:00Z'
  }
];
