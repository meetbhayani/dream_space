export type FAQCategory = 'services' | 'process' | 'pricing' | 'materials' | 'general';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  order: number;
  featured: boolean;
  createdAt: string;
}
export interface FAQFilterOptions {
  category?: FAQCategory;
}
