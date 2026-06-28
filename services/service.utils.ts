import { Service, ServiceFilterOptions } from '../types/service.types';

const normalizeText = (value: string): string => value.trim().toLowerCase();

export const applyServiceFilters = (services: Service[], filters?: ServiceFilterOptions): Service[] => {
  let filteredServices = [...services];

  if (filters?.category) {
    filteredServices = filteredServices.filter((service) => service.category === filters.category);
  }

  if (typeof filters?.featured === 'boolean') {
    filteredServices = filteredServices.filter((service) => service.featured === filters.featured);
  }

  if (filters?.search) {
    const query = normalizeText(filters.search);
    filteredServices = filteredServices.filter((service) => {
      const haystack = [service.title, service.summary, service.description, service.category]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }

  if (filters?.excludeSlug) {
    filteredServices = filteredServices.filter((service) => service.slug !== filters.excludeSlug);
  }

  if (typeof filters?.limit === 'number') {
    filteredServices = filteredServices.slice(0, filters.limit);
  }

  return filteredServices;
};
