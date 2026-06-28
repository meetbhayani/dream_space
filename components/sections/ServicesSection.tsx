import React from 'react';
import { SERVICES_DATA } from '@/data/services';
import { ServiceCard } from '@/components/cards/ServiceCard';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="my-20">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
