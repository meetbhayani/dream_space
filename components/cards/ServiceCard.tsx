import React from 'react';
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="rounded-lg bg-neutral-800 p-6 shadow-lg transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
      <p className="text-sm text-gray-300 mb-4">{service.summary}</p>
      <ul className="list-disc list-inside text-sm text-gray-400 mb-4">
        {service.features.map((f, i) => (
          <li key={i}>{f.title}: {f.description}</li>
        ))}
      </ul>
      <a href={`#${service.slug}`} className="text-primary hover:underline">
        Learn more →
      </a>
    </div>
  );
};
