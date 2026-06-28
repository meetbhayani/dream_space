export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  projectType: 'residential' | 'commercial' | 'retail' | 'other';
  message: string;
}

export interface ConsultationFormInput {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTimeSlot: 'morning' | 'afternoon' | 'evening';
  consultationType: 'virtual' | 'in-person';
  projectType: 'villa' | 'apartment' | 'commercial' | 'renovation' | 'other';
  notes?: string;
}

export interface NewsletterFormInput {
  email: string;
}

export interface BudgetCalculatorInput {
  propertyType: 'villa' | 'apartment' | 'office' | 'retail';
  areaSqFt: number;
  qualityLevel: 'premium' | 'ultra-luxury' | 'bespoke';
  scope: string[]; // e.g. ["kitchen", "living-room", "bedroom"]
}

export interface BudgetCalculatorResult {
  minEstimate: number;
  maxEstimate: number;
  formattedMin: string;
  formattedMax: string;
  qualityLevel: 'premium' | 'ultra-luxury' | 'bespoke';
  details: {
    baseRatePerSqFt: number;
    areaSqFt: number;
    propertyType: string;
  };
}
