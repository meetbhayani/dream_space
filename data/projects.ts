import { Project } from '../types/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'The Sky Villa',
    slug: 'the-sky-villa',
    subtitle: 'High-rise Sanctuary in Science City',
    description: 'A 6,500 sq.ft. duplex penthouse designed around the concept of organic luxury. Featuring floor-to-ceiling Italian marble claddings, integrated home automation, custom-designed veneer millwork, and double-height living spaces looking over the Ahmedabad city skyline.',
    scope: [
      'Interior Space Re-planning',
      'Italian Statuario Marble Flooring',
      'Bespoke Veneer Wall Panelling',
      'Automated Layered Lighting',
      'Curated Global Furniture Sourcing'
    ],
    category: 'villa',
    client: {
      name: 'Dr. Anand Patel',
      type: 'residential',
      feedback: 'Dream Space Studio translated our vision into an architectural masterpiece. The flow of light, the meticulous veneer selections, and the sheer elegance of the double-height lounge is beyond words.'
    },
    location: 'Science City, Ahmedabad',
    year: 2025,
    status: 'completed',
    budget: 'ultra-luxury',
    estimatedValue: '₹3.5 Crores',
    coverImage: '/images/projects/sky-villa-cover.jpg',
    gallery: [
      { id: 'img-1-1', url: '/images/projects/sky-villa-lounge.jpg', type: 'image', alt: 'Double height living lounge with Italian marble', order: 1, featured: true },
      { id: 'img-1-2', url: '/images/projects/sky-villa-bedroom.jpg', type: 'image', alt: 'Master bedroom suite with custom leather headboard', order: 2 },
      { id: 'img-1-3', url: '/images/projects/sky-villa-kitchen.jpg', type: 'image', alt: 'Minimalist dry kitchen with charcoal grey island', order: 3 }
    ],
    beforeAfter: {
      beforeUrl: '/images/projects/sky-villa-before.jpg',
      afterUrl: '/images/projects/sky-villa-after.jpg',
      labelBefore: 'Raw Bare-shell Duplex',
      labelAfter: 'Finished Masterpiece'
    },
    materials: [
      { name: 'Statuario Marble', description: 'Premium Italian marble with bold, dramatic grey veins.', category: 'marble' },
      { name: 'Smoked Oak Veneer', description: 'Dark, rich wood texture providing warmth to double height partitions.', category: 'wood' },
      { name: 'Brushed Brass Trims', description: 'Subtle metallic highlights detailing panels and doors.', category: 'metal' }
    ],
    designers: [
      { name: 'Vikram Sheth', role: 'Principal Designer' },
      { name: 'Kavya Shah', role: 'Project Architect' }
    ],
    completionDate: '2025-11-20',
    seo: {
      title: 'Luxury Penthouse Sky Villa Interior Design | Dream Space Studio',
      description: 'Step inside The Sky Villa, a premium duplex penthouse interior in Ahmedabad. Custom Statuario marble flooring, automated lighting, and bespoke veneer millwork.'
    },
    createdAt: '2025-11-25T10:00:00Z',
    updatedAt: '2025-11-25T10:00:00Z'
  },
  {
    id: 'proj-2',
    title: 'The Courtyard Pavilion',
    slug: 'the-courtyard-pavilion',
    subtitle: 'Earthy Modernism in Sargasan',
    description: 'An architectural design intervention for a multi-generational family home. We integrated a central court structure with custom water elements, wrapped by open-plan lounges, a home theatre with high-end acoustics, and light-filled guest wings.',
    scope: [
      'Central Courtyard Renovation',
      'Custom Water Stream Integration',
      'Teak Wood Ceiling Elements',
      'Acoustic Home Cinema Layout',
      'Indirect Light Sculpturing'
    ],
    category: 'residential',
    client: {
      name: 'Adani Estates',
      type: 'residential',
      feedback: 'The integration of the courtyard completely changed our living dynamic. It feels calm, deeply rooted in nature, yet intensely premium.'
    },
    location: 'Sargasan, Gandhinagar',
    year: 2026,
    status: 'completed',
    budget: 'bespoke',
    estimatedValue: '₹5.0 Crores',
    coverImage: '/images/projects/courtyard-cover.jpg',
    gallery: [
      { id: 'img-2-1', url: '/images/projects/courtyard-main.jpg', type: 'image', alt: 'Sunken courtyard seating area with water stream', order: 1, featured: true },
      { id: 'img-2-2', url: '/images/projects/courtyard-dining.jpg', type: 'image', alt: 'Dining area overlooking the central glass court', order: 2 }
    ],
    materials: [
      { name: 'Beige Travertine Stone', description: 'Honed travertine walls reflecting natural morning shadows.', category: 'stone' },
      { name: 'Burmese Teak Wood', description: 'Restorative ceiling planks providing soft acoustic dampening.', category: 'wood' }
    ],
    designers: [
      { name: 'Vikram Sheth', role: 'Principal Designer' },
      { name: 'Rajiv Mehta', role: 'Sourcing Head' }
    ],
    completionDate: '2026-04-10',
    seo: {
      title: 'Modern Courtyard Villa Interior Design | Dream Space Studio',
      description: 'Tour The Courtyard Pavilion in Sargasan, Gandhinagar. Melding travertine stone, Burma teak ceiling finishes, and customized water features.'
    },
    createdAt: '2026-04-15T09:00:00Z',
    updatedAt: '2026-04-15T09:00:00Z'
  }
];
