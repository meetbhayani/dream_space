import { ContactPayload, ConsultationPayload, NewsletterPayload, QuotePayload } from './types';

export async function handleContact(payload: ContactPayload): Promise<void> {
  console.log('Received contact', payload);
}

export async function handleConsultation(payload: ConsultationPayload): Promise<void> {
  console.log('Received consultation', payload);
}

export async function handleNewsletter(payload: NewsletterPayload): Promise<void> {
  console.log('Received newsletter', payload);
}

export async function handleQuote(payload: QuotePayload): Promise<void> {
  console.log('Received quote', payload);
}
