export interface TeamSocial {
  platform: 'instagram' | 'linkedin' | 'pinterest' | 'twitter';
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  designation: string;
  photo: string;
  experienceYears: number;
  biography: string;
  credentials: string[]; // e.g. ["B.Arch - CEPT University", "IIID Member"]
  socialLinks: TeamSocial[];
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}
export interface TeamFilterOptions {
  limit?: number;
  featured?: boolean;
}
