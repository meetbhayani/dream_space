import { Service } from '../types/service';

export const SERVICES_DATA: Service[] = [
  {
    id: 'srv-1',
    title: 'Bespoke Residential Interiors',
    slug: 'bespoke-residential-interiors',
    description: 'We orchestrate highly-personalized living spaces for private luxury villas, estates, and premium penthouses. Every element, from custom stone wall layouts to bespoke lighting plans, is meticulously curated to reflect your narrative.',
    summary: 'Tailored architectural interiors for high-end villas, estates, and premium penthouses.',
    icon: 'home',
    heroImage: '/images/services/residential-hero.jpg',
    category: 'interior-design',
    features: [
      { title: 'Spatial Architecture & Layouts', description: 'Reimagining pathways and space structures for organic flow.' },
      { title: 'Material & Palette Curation', description: 'Imported marble, hand-selected veneers, and exclusive fabrics.' },
      { title: 'Bespoke Millwork', description: 'Custom floor-to-ceiling wardrobes, vanities, and TV credenzas.' },
      { title: 'Atmospheric Lighting Plans', description: 'Layered illumination highlighting architectural details.' }
    ],
    process: [
      { title: 'Concept Formulation', description: 'Exploring spatial structures, mood boards, and aesthetic direction.', duration: '2-3 weeks' },
      { title: 'Design Development', description: 'Elaborating 3D visualizations, material swatches, and working drawings.', duration: '4-5 weeks' },
      { title: 'Material Acquisition', description: 'Sourcing imported furniture, stone selection, and custom detailing.', duration: '3-4 weeks' },
      { title: 'On-Site Realization', description: 'Orchestrating layout fit-outs and styling under strict supervision.', duration: '12-16 weeks' }
    ],
    pricingRange: 'Starting from ₹2,500 / sq. ft.',
    featured: true,
    order: 1,
    seo: {
      title: 'Bespoke Residential Interior Design Services | Dream Space Studio',
      description: 'Discover luxury villa and penthouse interior designs customized to perfection. Sourced imported materials, custom layouts, and ambient lighting layouts.'
    },
    createdAt: '2026-06-28T09:00:00Z',
    updatedAt: '2026-06-28T09:00:00Z'
  },
  {
    id: 'srv-2',
    title: 'Turnkey Design Execution',
    slug: 'turnkey-design-execution',
    description: 'A complete, hands-off delivery package where we oversee the entire process from conceptual blueprints to the final placement of decor accessories, ensuring exact match to visualizations with premium quality standards.',
    summary: 'A seamless, end-to-end design execution service managing contractors, sourcing, and project alignment.',
    icon: 'key',
    heroImage: '/images/services/turnkey-hero.jpg',
    category: 'turnkey-execution',
    features: [
      { title: 'Single Point Responsibility', description: 'Absolute alignment of layouts, vendor schedules, and cost limits.' },
      { title: 'Strict Quality Supervision', description: 'On-site engineering checks for layout dimensions and finishes.' },
      { title: 'Transparent Procurement', description: 'Direct brand partnerships for fixtures, lighting, and materials.' },
      { title: 'White-Glove Handover', description: 'Deep-cleaned, fully accessorized, and ready to occupy.' }
    ],
    process: [
      { title: 'Feasibility & Estimation', description: 'Finalizing technical specs, itemized quotes, and milestone timelines.', duration: '1-2 weeks' },
      { title: 'Civil & Services Fit-Out', description: 'HVAC installation, smart home wiring, and wall adjustments.', duration: '6-8 weeks' },
      { title: 'Aesthetic Assembly', description: 'Carpentry assembly, ceiling finishes, marble cladding, and paint.', duration: '8-10 weeks' },
      { title: 'Curation & Reveal', description: 'Placing custom upholstery, fine-art hanging, and lighting adjustments.', duration: '2-3 weeks' }
    ],
    pricingRange: 'Based on Project Scope & Visualizations',
    featured: true,
    order: 2,
    seo: {
      title: 'Turnkey Interior Design Execution | Dream Space Studio',
      description: 'End-to-end luxury turnkey execution services in Ahmedabad. We handle custom sourcing, styling, and general contracting for elite properties.'
    },
    createdAt: '2026-06-28T09:00:00Z',
    updatedAt: '2026-06-28T09:00:00Z'
  },
  {
    id: 'srv-3',
    title: 'Commercial & Executive Spaces',
    slug: 'commercial-executive-spaces',
    description: 'We craft sophisticated workspaces, flagship retail stores, and boutique dining lounges that encapsulate brand legacy while elevating employee productivity and client perception.',
    summary: 'Elite commercial layouts for executive offices, flagship stores, and hospitality lounges.',
    icon: 'briefcase',
    heroImage: '/images/services/commercial-hero.jpg',
    category: 'commercial',
    features: [
      { title: 'Brand Identity Synthesis', description: 'Translating corporate philosophy into physical spatial environments.' },
      { title: 'Ergonomic Workspace Layouts', description: 'Acoustically-insulated meeting cabins, hot-desking, and break zones.' },
      { title: 'Bespoke Reception & Lounges', description: 'Creating memorable visual highlights for visiting clientele.' },
      { title: 'Technical Services Integration', description: 'Advanced ventilation, custom wire channels, and fire safety systems.' }
    ],
    process: [
      { title: 'Operational Mapping', description: 'Analyzing workspace capacity, utility lines, and client flow.', duration: '2 weeks' },
      { title: 'Visual Boarding', description: 'Presenting executive rendering sets, lighting styles, and seating configurations.', duration: '3 weeks' },
      { title: 'Procurement & Fabrication', description: 'Custom workspace desks, brand partition setups, and fixtures.', duration: '4 weeks' },
      { title: 'Site Implementation', description: 'Rapid workflow scheduling to minimize business downtime.', duration: '8-10 weeks' }
    ],
    pricingRange: 'Starting from ₹1,800 / sq. ft.',
    featured: false,
    order: 3,
    seo: {
      title: 'Commercial & Corporate Office Interior Designers | Dream Space Studio',
      description: 'Elevate your business headquarters. Custom office designs, luxury retail spaces, and executive lounges in Gujarat.'
    },
    createdAt: '2026-06-28T09:00:00Z',
    updatedAt: '2026-06-28T09:00:00Z'
  }
];
