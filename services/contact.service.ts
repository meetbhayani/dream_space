import {
  ContactFormInput,
  ConsultationFormInput,
  NewsletterFormInput
} from '../types/forms';

/**
 * Service managing client inquiries, booking requests, and newsletter leads.
 */
export interface IContactService {
  /**
   * Submits contact inquiries. Returns true if saved successfully.
   */
  submitInquiry(input: ContactFormInput): Promise<boolean>;

  /**
   * Submits detailed virtual/in-person consultation bookings.
   */
  bookConsultation(input: ConsultationFormInput): Promise<boolean>;

  /**
   * Submits emails to subscribe to the design newsletter updates.
   */
  subscribeNewsletter(input: NewsletterFormInput): Promise<boolean>;
}
export default IContactService;
