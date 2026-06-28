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
  },
  {
    id: 'proj-3',
    title: 'The Coastal Retreat',
    slug: 'the-coastal-retreat',
    subtitle: 'Luxury beachfront villa in Alibaug',
    description: 'A serene 8,200 sq.ft. seaside residence featuring floor‑to‑ceiling glass walls, natural stone terraces, and a private infinity pool overlooking the Arabian Sea.',
    scope: 
    [
      'Site Master Planning',
      'Marine ‑ grade Concrete Foundations',
      'Custom Mahogany Decking',
      'Integrated Smart Home System',
      'Landscape & Pool Design'
    ],
    category: 'villa',
    client: { name: 'Rohan Mehta', type: 'residential', feedback: 'The Coastal Retreat exceeded every expectation – the seamless indoor‑outdoor flow is breathtaking.' },
    location: 'Alibaug, Maharashtra',
    year: 2027,
    status: 'completed',
    budget: 'ultra-luxury',
    estimatedValue: '₹4.8 Crores',
    coverImage: '/images/projects/coastal-retreat-cover.jpg',
    gallery: [
      { id: 'img-3-1', url: '/images/projects/coastal-retreat-living.jpg', type: 'image', alt: 'Living area with ocean view', order: 1, featured: true },
      { id: 'img-3-2', url: '/images/projects/coastal-retreat-pool.jpg', type: 'image', alt: 'Infinity pool at sunset', order: 2 }
    ],
    materials: [
      { name: 'Travertine Marble', description: 'Polished stone for pool surrounds', category: 'stone' },
      { name: 'Mahogany Wood', description: 'Premium decking material', category: 'wood' }
    ],
    designers: [
      { name: 'Vikram Sheth', role: 'Principal Designer' },
      { name: 'Anita Rao', role: 'Sustainability Lead' }
    ],
    completionDate: '2027-03-15',
    seo: { title: 'Coastal Retreat Luxury Villa | Dream Space Studio', description: 'Explore the seaside elegance of The Coastal Retreat, a premium beachfront villa designed with glass walls, stone terraces, and smart home automation.' },
    createdAt: '2027-02-01T09:30:00Z',
    updatedAt: '2027-02-01T09:30:00Z'
  },
  {
    id: 'proj-4',
    title: 'The Heritage Loft',
    slug: 'the-heritage-loft',
    subtitle: 'Adaptive reuse of historic market building',
    description: 'Transformation of a 1920‑s Art Deco market block in Ahmedabad into a high‑end mixed‑use loft with boutique retail, coworking, and luxury residences.',
    scope: [
      'Structural Reinforcement',
      'Heritage Facade Restoration',
      'Custom Brass Fixtures',
      'Integrated HVAC & Smart Lighting'
    ],
    category: 'commercial',
    client: { name: 'Heritage Developments Ltd.', type: 'commercial', feedback: 'Preserving the heritage while creating a modern experience was a masterstroke.' },
    location: 'Old Ahmedabad',
    year: 2026,
    status: 'completed',
    budget: 'bespoke',
    estimatedValue: '₹6.2 Crores',
    coverImage: '/images/projects/heritage-loft-cover.jpg',
    gallery: [
      { id: 'img-4-1', url: '/images/projects/heritage-loft-interior.jpg', type: 'image', alt: 'Heritage loft interior with brass accents', order: 1, featured: true }
    ],
    materials: [
      { name: 'Brass', description: 'Custom brass lighting fixtures and railings', category: 'metal' },
      { name: 'Reclaimed Brick', description: 'Exposed brick walls preserving original texture', category: 'stone' }
    ],
    designers: [
      { name: 'Kavya Shah', role: 'Project Architect' },
      { name: 'Ravi Desai', role: 'Heritage Consultant' }
    ],
    completionDate: '2026-11-20',
    seo: { title: 'Heritage Loft Adaptive Reuse Project | Dream Space Studio', description: 'Discover The Heritage Loft – a luxurious transformation of a historic market building into a modern mixed‑use loft.' },
    createdAt: '2026-09-10T10:00:00Z',
    updatedAt: '2026-09-10T10:00:00Z'
  },
  {
    id: 'proj-5',
    title: 'The Sky‑High Office',
    slug: 'the-sky-high-office',
    subtitle: 'Premium corporate tower in Mumbai',
    description: 'A 25‑storey corporate headquarters featuring glass curtain walls, marble lobby, custom lighting rigs, and high‑tech conference suites.',
    scope: [
      'Vertical Façade Design',
      'Marble Lobby & Reception',
      'Acoustic Conference Rooms',
      'Smart Building Management System'
    ],
    category: 'commercial',
    client: { name: 'Maharashtra Financial Corp.', type: 'commercial', feedback: 'The office reflects our brand prestige and offers state‑of‑the‑art employee experience.' },
    location: 'Bandra Kurla Complex, Mumbai',
    year: 2028,
    status: 'in-progress',
    budget: 'ultra-luxury',
    estimatedValue: '₹12 Crores',
    coverImage: '/images/projects/sky-high-office-cover.jpg',
    gallery: [
      { id: 'img-5-1', url: '/images/projects/sky-high-office-lobby.jpg', type: 'image', alt: 'Grand marble lobby with chandelier', order: 1, featured: true }
    ],
    materials: [
      { name: 'Italian Carrara Marble', description: 'Luxe marble for lobby flooring', category: 'marble' },
      { name: 'LED Panel System', description: 'Dynamic lighting for conference rooms', category: 'lighting' }
    ],
    designers: [
      { name: 'Vikram Sheth', role: 'Principal Designer' },
      { name: 'Sneha Patel', role: 'Technology Integration Lead' }
    ],
    completionDate: '2028-08-30',
    seo: { title: 'Sky‑High Office Interior Design | Dream Space Studio', description: 'Explore the premium interior design of The Sky‑High Office, a landmark corporate tower in Mumbai featuring marble, glass, and smart tech.' },
    createdAt: '2027-12-01T09:00:00Z',
    updatedAt: '2027-12-01T09:00:00Z'
  }
];
