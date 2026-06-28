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
    category: 'architecture',
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
  },

    {
      id: 'srv-4',
      title: 'Custom Furniture Design',
      slug: 'custom-furniture-design',
      description: 'Bespoke furniture pieces handcrafted from premium materials, tailored to each client’s space and aesthetic, integrating seamlessly with overall interior concepts.',
      summary: 'Handcrafted luxury furniture designs for high-end interiors.',
      icon: 'settings',
      heroImage: '/images/services/furniture-hero.jpg',
      category: 'interior-design',
      features: [
        { title: 'Tailored Design', description: 'Collaborative design process to create unique pieces.' },
        { title: 'Premium Materials', description: 'Selection of exotic woods, marble tops, and metal accents.' },
        { title: 'Artisanal Craftsmanship', description: 'Hand-built by master craftsmen.' }
      ],
      process: [
        { title: 'Concept Consultation', description: 'Understanding client vision and functional needs.', duration: '1 week' },
        { title: 'Design Development', description: '3D renderings and material selection.', duration: '2 weeks' },
        { title: 'Fabrication', description: 'Handcrafting the pieces in workshop.', duration: '4 weeks' },
        { title: 'Installation', description: 'Seamless placement and finishing touches.', duration: '1 week' }
      ],
      pricingRange: 'Starting from ₹5,000 per piece',
      featured: false,
      order: 4,
      seo: {
        title: 'Luxury Custom Furniture Design Services | Dream Space Studio',
        description: 'Create bespoke, handcrafted furniture pieces for premium residences with exquisite materials and craftsmanship.'
      },
      createdAt: '2026-06-28T09:00:00Z',
      updatedAt: '2026-06-28T09:00:00Z'
    },
    {
      id: 'srv-5',
      title: 'Lighting Design Consultation',
      slug: 'lighting-design-consultation',
      description: 'Expert lighting design that enhances ambience, highlights architecture, and integrates smart controls for energy efficiency.',
      summary: 'Premium lighting schemes for luxury interiors.',
      icon: 'sun',
      heroImage: '/images/services/lighting-hero.jpg',
      category: 'interior-design',
      features: [
        { title: 'Layered Lighting', description: 'Ambient, task, and accent lighting design.' },
        { title: 'Smart Integration', description: 'Home automation and dimming control.' },
        { title: 'Energy Efficiency', description: 'LED solutions and daylight harvesting.' }
      ],
      process: [
        { title: 'Site Survey', description: 'Analyzing space and natural light.', duration: '1 week' },
        { title: 'Concept Design', description: 'Lighting plans and renderings.', duration: '2 weeks' },
        { title: 'Specification', description: 'Selecting fixtures and controls.', duration: '1 week' },
        { title: 'Installation & Tuning', description: 'Implementation and calibration.', duration: '2 weeks' }
      ],
      pricingRange: 'Starting from ₹1,200 per sqm',
      featured: false,
      order: 5,
      seo: {
        title: 'Luxury Lighting Design Services | Dream Space Studio',
        description: 'Curated lighting solutions for upscale interiors, combining aesthetics and smart technology.'
      },
      createdAt: '2026-06-28T09:00:00Z',
      updatedAt: '2026-06-28T09:00:00Z'
    },
    {
      id: 'srv-6',
      title: 'Sustainability Consulting',
      slug: 'sustainability-consulting',
      description: 'Guidance on eco‑friendly material selection, energy‑saving design strategies, and green certifications for luxury projects.',
      summary: 'Sustainable luxury interior design consulting.',
      icon: 'leaf',
      heroImage: '/images/services/sustainability-hero.jpg',
      category: 'consultation',
      features: [
        { title: 'Material Advisory', description: 'Low‑VOC finishes and reclaimed wood.' },
        { title: 'Energy Modeling', description: 'Simulation for optimal climate control.' },
        { title: 'Certification Support', description: 'LEED, GRIHA assistance.' }
      ],
      process: [
        { title: 'Assessment', description: 'Review of existing design intents.', duration: '1 week' },
        { title: 'Strategy Development', description: 'Sustainable design roadmap.', duration: '2 weeks' },
        { title: 'Implementation Guidance', description: 'Vendor selection and compliance.', duration: '3 weeks' }
      ],
      pricingRange: 'Custom based on scope',
      featured: false,
      order: 6,
      seo: {
        title: 'Luxury Sustainable Interior Design Consulting | Dream Space Studio',
        description: 'Integrate sustainability into high‑end interior projects with expert guidance.'
      },
      createdAt: '2026-06-28T09:00:00Z',
      updatedAt: '2026-06-28T09:00:00Z'
    },
    {
      id: 'srv-7',
      title: 'Art Curation Service',
      slug: 'art-curation-service',
      description: 'Selection and placement of fine art pieces, sculpture, and bespoke installations that complement the interior narrative.',
      summary: 'Curated art integration for luxury interiors.',
      icon: 'image',
      heroImage: '/images/services/art-hero.jpg',
      category: 'consultation',
      features: [
        { title: 'Artist Collaboration', description: 'Work with emerging and established artists.' },
        { title: 'Custom Installations', description: 'Tailored lighting and mounting solutions.' },
        { title: 'Storytelling', description: 'Art that reflects client’s heritage and taste.' }
      ],
      process: [
        { title: 'Concept Discussion', description: 'Understanding the desired narrative.', duration: '1 week' },
        { title: 'Selection', description: 'Curating pieces and sourcing.', duration: '2 weeks' },
        { title: 'Installation', description: 'Professional placement and lighting.', duration: '1 week' }
      ],
      pricingRange: 'Variable per piece',
      featured: false,
      order: 7,
      seo: {
        title: 'Luxury Art Curation Services | Dream Space Studio',
        description: 'Integrate fine art and sculptural pieces into premium interior designs.'
      },
      createdAt: '2026-06-28T09:00:00Z',
      updatedAt: '2026-06-28T09:00:00Z'
    }
];

