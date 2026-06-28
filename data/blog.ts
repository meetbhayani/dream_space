import { BlogAuthor, BlogCategory, BlogPost } from '../types/blog';

export const BLOG_AUTHORS: BlogAuthor[] = [
  {
    id: 'author-1',
    name: 'Aarav Shah',
    avatar: '/images/blog/authors/aarav-shah.jpg',
    bio: 'Design strategist and creative storyteller shaping Dream Space Studio narratives.',
    role: 'Creative Director',
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'author-2',
    name: 'Nisha Patel',
    avatar: '/images/blog/authors/nisha-patel.jpg',
    bio: 'Interior curator focused on material storytelling and luxury project insights.',
    role: 'Content Lead',
    socials: {
      linkedin: 'https://linkedin.com'
    }
  }
];

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'cat-design-inspiration',
    name: 'Design Inspiration',
    slug: 'design-inspiration',
    description: 'Ideas, mood, and aesthetic guidance for luxury interiors.'
  },
  {
    id: 'cat-materials',
    name: 'Materials',
    slug: 'materials',
    description: 'Material stories, sourcing inspiration, and premium finishes.'
  },
  {
    id: 'cat-process',
    name: 'Process',
    slug: 'process',
    description: 'Behind-the-scenes project workflow and delivery insights.'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How Luxury Interiors Balance Texture, Light, and Scale',
    slug: 'how-luxury-interiors-balance-texture-light-and-scale',
    excerpt: 'A closer look at how layered lighting and sculptural materials create a calm, high-end atmosphere.',
    content: '# Luxury Interiors and Atmosphere\n\nLuxury interiors are shaped by the relationship between texture, light, and scale. When these three are balanced, a room feels composed, calm, and deeply intentional.\n\n## Texture\nTexture introduces depth and tactility. Velvet, travertine, brushed brass, and smoked oak each contribute a distinct emotional layer.\n\n## Light\nLight should feel guided rather than dramatic. Soft washes, layered illumination, and strategic contrast help architecture breathe.\n\n## Scale\nThe right scale creates comfort. Oversized furniture, carefully proportioned joinery, and clear circulation all shape the experience of the space.',
    coverImage: '/images/blog/luxury-texture-light.jpg',
    author: BLOG_AUTHORS[0],
    category: BLOG_CATEGORIES[0],
    tags: ['luxury', 'lighting', 'materials'],
    status: 'published',
    publishedAt: '2026-06-10T09:00:00Z',
    readTime: '5 min read',
    featured: true,
    seo: {
      title: 'Luxury Interiors and Atmosphere | Dream Space Studio',
      description: 'Explore how texture, light, and scale shape a calm, unforgettable luxury interior experience.'
    },
    createdAt: '2026-06-10T09:00:00Z',
    updatedAt: '2026-06-10T09:00:00Z'
  },
  {
    id: 'blog-2',
    title: 'Why Premium Materials Matter More Than Trends',
    slug: 'why-premium-materials-matter-more-than-trends',
    excerpt: 'Material choice is one of the strongest long-term decisions in interior design because it defines longevity and atmosphere.',
    content: '# Premium Materials That Last\n\nThe most enduring interiors are rarely the loudest. They are the ones built on materials with character, longevity, and quiet confidence.\n\nA marble floor, a walnut joinery detail, a hand-finished brass fixture — these details age gracefully and hold meaning over time.',
    coverImage: '/images/blog/premium-materials.jpg',
    author: BLOG_AUTHORS[1],
    category: BLOG_CATEGORIES[1],
    tags: ['materials', 'sourcing', 'luxury'],
    status: 'published',
    publishedAt: '2026-05-22T11:30:00Z',
    readTime: '4 min read',
    featured: true,
    seo: {
      title: 'Why Premium Materials Matter | Dream Space Studio',
      description: 'Learn why premium materials create timeless interiors and elevate everyday living spaces.'
    },
    createdAt: '2026-05-22T11:30:00Z',
    updatedAt: '2026-05-22T11:30:00Z'
  },
  {
    id: 'blog-3',
    title: 'A Turnkey Interior Process That Feels Effortless',
    slug: 'a-turnkey-interior-process-that-feels-effortless',
    excerpt: 'The strongest turnkey projects are coordinated, transparent, and carefully staged from concept to handover.',
    content: '# Turnkey Interior Process\n\nTurnkey execution works best when it feels invisible to the client. The design journey should stay calm, guided, and deeply organized from the first site visit to final styling.\n\nClear communication, milestone tracking, and procurement discipline are essential to a premium experience.',
    coverImage: '/images/blog/turnkey-process.jpg',
    author: BLOG_AUTHORS[0],
    category: BLOG_CATEGORIES[2],
    tags: ['turnkey', 'process', 'execution'],
    status: 'published',
    publishedAt: '2026-04-18T08:15:00Z',
    readTime: '6 min read',
    featured: false,
    seo: {
      title: 'Turnkey Interior Process | Dream Space Studio',
      description: 'Understand how Dream Space Studio manages a seamless turnkey interior process from concept to closing.'
    },
    createdAt: '2026-04-18T08:15:00Z',
    updatedAt: '2026-04-18T08:15:00Z'
  }
];