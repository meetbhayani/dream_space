import { FAQItem } from '../types/faq';

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you structure the design fee for luxury residential projects?',
    answer: 'Our fee is structured either as a fixed design consultancy fee based on the square footage and complexity, or as a percentage of the total project execution cost. We provide a transparent, itemized estimation detailing all milestones after our initial site inspection and layout mapping.',
    category: 'pricing',
    order: 1,
    featured: true,
    createdAt: '2026-06-28T09:00:00Z'
  },
  {
    id: 'faq-2',
    question: 'What is the average timeline for executing a 4BHK luxury villa?',
    answer: 'A comprehensive luxury villa project typically takes 6 to 9 months. This includes 6-8 weeks for spatial planning, detailed 3D designs, and material selection, followed by 18-24 weeks of turnkey on-site execution, custom joinery fabrication, and final styling adjustments.',
    category: 'process',
    order: 2,
    featured: true,
    createdAt: '2026-06-28T09:00:00Z'
  },
  {
    id: 'faq-3',
    question: 'Do you design and source custom furniture from international brands?',
    answer: 'Yes, custom furniture and lighting curation is a core part of our luxury service. We import high-end furniture, light fixtures, and wall panels from partnerships in Italy, Germany, and Turkey, alongside fabricating bespoke millwork in our local modular facilities.',
    category: 'materials',
    order: 3,
    featured: false,
    createdAt: '2026-06-28T09:00:00Z'
  }
];
