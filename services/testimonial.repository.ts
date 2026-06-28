import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Testimonial, TestimonialRepository } from '../types/testimonial';

export class TestimonialRepositoryImpl implements TestimonialRepository {
  async getTestimonials(): Promise<Testimonial[]> {
    return [...TESTIMONIALS_DATA].sort((left, right) => left.order - right.order);
  }

  async getFeaturedTestimonials(limit = 4): Promise<Testimonial[]> {
    return (await this.getTestimonials()).filter((testimonial) => testimonial.featured).slice(0, limit);
  }

  async getTestimonialsByProject(projectId?: string): Promise<Testimonial[]> {
    if (!projectId) {
      return [];
    }

    return (await this.getTestimonials()).filter((testimonial) => testimonial.projectId === projectId);
  }

  async getTestimonialsByProjectSlug(projectSlug?: string): Promise<Testimonial[]> {
    if (!projectSlug) {
      return [];
    }

    return (await this.getTestimonials()).filter((testimonial) => testimonial.projectSlug === projectSlug);
  }
}

export const testimonialRepository = new TestimonialRepositoryImpl();
export default testimonialRepository;
