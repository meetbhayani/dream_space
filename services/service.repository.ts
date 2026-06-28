import { SERVICES_DATA } from '../data/services';
import { Service, ServiceCategory, ServiceRepository } from '../types/service.types';

const serviceCategories: ServiceCategory[] = [
  {
    id: 'cat-residential',
    slug: 'interior-design',
    name: 'Interior Design',
    description: 'Custom residential and luxury interior design experiences.'
  },
  {
    id: 'cat-architecture',
    slug: 'architecture',
    name: 'Architecture',
    description: 'Spatial planning and architectural design consultancy.'
  },
  {
    id: 'cat-turnkey',
    slug: 'turnkey-execution',
    name: 'Turnkey Execution',
    description: 'Complete project delivery from concept to handover.'
  },
  {
    id: 'cat-consultation',
    slug: 'consultation',
    name: 'Consultation',
    description: 'Strategy-led advisory and specialist consulting services.'
  }
];

export class ServiceRepositoryImpl implements ServiceRepository {
  async getServices(): Promise<Service[]> {
    return [...SERVICES_DATA].sort((left, right) => left.order - right.order);
  }

  async getServiceBySlug(slug: string): Promise<Service | null> {
    return SERVICES_DATA.find((service) => service.slug === slug) ?? null;
  }

  async getServiceById(id: string): Promise<Service | null> {
    return SERVICES_DATA.find((service) => service.id === id) ?? null;
  }

  async getFeaturedServices(limit = 4): Promise<Service[]> {
    return (await this.getServices()).filter((service) => service.featured).slice(0, limit);
  }

  async getCategories(): Promise<ServiceCategory[]> {
    return serviceCategories;
  }
}

export const serviceRepository = new ServiceRepositoryImpl();
export default serviceRepository;
