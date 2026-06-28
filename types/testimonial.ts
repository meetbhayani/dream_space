export interface Testimonial {
  id: string;
  clientName: string;
  designation: string; // e.g. "CEO, Tech Corp" or "Villa Owner"
  company?: string;
  projectId?: string;
  projectName?: string;
  projectSlug?: string;
  rating: number; // 1 to 5 stars
  review: string;
  avatar: string;
  videoUrl?: string; // Optional link to video feedback
  featured: boolean;
  order: number;
  approved: boolean;
  createdAt: string;
}
