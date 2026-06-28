import { Statistic } from '../types/statistics';

export const STATISTICS_DATA: Statistic[] = [
  {
    id: 'stat-1',
    label: 'Projects Completed',
    value: 120,
    description: 'Total luxury projects delivered worldwide.',
    order: 1,
    featured: true,
    createdAt: '2026-06-28T09:00:00Z'
  },
  {
    id: 'stat-2',
    label: 'Awards Won',
    value: 35,
    description: 'International design awards recognizing excellence.',
    order: 2,
    featured: true,
    createdAt: '2026-06-28T09:00:00Z'
  },
  {
    id: 'stat-3',
    label: 'Years of Experience',
    value: 12,
    description: 'Collective expertise across the team.',
    order: 3,
    featured: false,
    createdAt: '2026-06-28T09:00:00Z'
  },
  {
    id: 'stat-4',
    label: 'Materials Sourced Worldwide',
    value: 45,
    description: 'Premium materials from 45 global suppliers.',
    order: 4,
    featured: false,
    createdAt: '2026-06-28T09:00:00Z'
  },
  {
    id: 'stat-5',
    label: 'Happy Clients',
    value: '98%',
    description: 'Client satisfaction rate based on post‑project surveys.',
    order: 5,
    featured: true,
    createdAt: '2026-06-28T09:00:00Z'
  }
];
