import { Service, ServiceCategory, ServiceCategoryType, ServiceFilterOptions, IServiceService } from '../types/service.types';
import { serviceRepository } from './service.repository';
import { applyServiceFilters } from './service.utils';

class ServiceService implements IServiceService {
  async getServices(filters?: ServiceFilterOptions): Promise<Service[]> {
    const services = await serviceRepository.getServices();
    return applyServiceFilters(services, filters);
  }

  async getServiceBySlug(slug: string): Promise<Service | null> {
    return serviceRepository.getServiceBySlug(slug);
  }

  async getServiceById(id: string): Promise<Service | null> {
    return serviceRepository.getServiceById(id);
  }

  async getFeaturedServices(limit = 4): Promise<Service[]> {
    const services = await serviceRepository.getFeaturedServices(limit);
    return services.sort((left, right) => left.order - right.order);
  }

  async getRelatedServices(currentSlug: string, category?: ServiceCategoryType, limit = 3): Promise<Service[]> {
    const services = await this.getServices({
      category,
      excludeSlug: currentSlug,
      limit
    });

    return services.sort((left, right) => left.order - right.order);
  }

  async getCategories(): Promise<ServiceCategory[]> {
    return serviceRepository.getCategories();
  }
}

export const serviceService = new ServiceService();
export default serviceService;
