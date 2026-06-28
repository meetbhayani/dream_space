import { Testimonial, TestimonialFilterOptions, TestimonialListResult, TestimonialQueryOptions, ITestimonialService } from '../types/testimonial';
import { testimonialRepository } from './testimonial.repository';
import { applyTestimonialFilters, buildTestimonialListResult, calculateAverageRating } from './testimonial.utils';

class TestimonialService implements ITestimonialService {
  async getTestimonials(filters?: TestimonialFilterOptions): Promise<Testimonial[]> {
    const items = await testimonialRepository.getTestimonials();
    return applyTestimonialFilters(items, filters);
  }

  async listTestimonials(query?: TestimonialQueryOptions): Promise<TestimonialListResult> {
    const items = await testimonialRepository.getTestimonials();
    return buildTestimonialListResult(items, query);
  }

  async getFeaturedTestimonials(limit = 4): Promise<Testimonial[]> {
    return testimonialRepository.getFeaturedTestimonials(limit);
  }

  async getTestimonialsByProject(projectId?: string): Promise<Testimonial[]> {
    return testimonialRepository.getTestimonialsByProject(projectId);
  }

  async getTestimonialsByProjectSlug(projectSlug?: string): Promise<Testimonial[]> {
    return testimonialRepository.getTestimonialsByProjectSlug(projectSlug);
  }

  async getAverageRating(): Promise<number> {
    const items = await testimonialRepository.getTestimonials();
    return calculateAverageRating(items);
  }
}

export const testimonialService = new TestimonialService();
export default testimonialService;
