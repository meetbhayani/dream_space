import { TeamMember } from '../types/team';

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Vikram Sheth',
    role: 'Principal Designer & Founder',
    designation: 'Principal Architect & Creative Lead',
    photo: '/images/team/vikram-sheth.jpg',
    experienceYears: 15,
    biography: 'Vikram founded Dream Space Studio in 2018 with a vision to merge contemporary European minimalism with rich Indian textures. An alumnus of CEPT University, Vikram has led over 100+ bespoke architectural interiors across Western India.',
    credentials: [
      'B.Arch - CEPT University, Ahmedabad',
      'Registered Architect under COA, India',
      'Executive Member of IIID (Indian Institute of Interior Designers)'
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/vikram-sheth-dummy' },
      { platform: 'instagram', url: 'https://instagram.com/vikramsheth.design' }
    ],
    featured: true,
    order: 1,
    createdAt: '2026-06-28T09:00:00Z',
    updatedAt: '2026-06-28T09:00:00Z'
  },
  {
    id: 'team-2',
    name: 'Kavya Shah',
    role: 'Associate Partner & Project Architect',
    designation: 'Associate Partner & Interior Lead',
    photo: '/images/team/kavya-shah.jpg',
    experienceYears: 8,
    biography: 'Kavya specializes in ultra-luxury spatial planning and detailed site orchestration. Her design approach centers on clean geometric lines, concealed storage integration, and acoustic comfort inside large residential spaces.',
    credentials: [
      'M.Arch - Milan Polytechnic, Italy',
      'B.Design (Interiors) - CEPT University'
    ],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/kavya-shah-dummy' },
      { platform: 'instagram', url: 'https://instagram.com/kavyashah.arch' }
    ],
    featured: true,
    order: 2,
    createdAt: '2026-06-28T09:00:00Z',
    updatedAt: '2026-06-28T09:00:00Z'
  }
];
