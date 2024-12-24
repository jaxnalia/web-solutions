export interface ServiceDetails {
  features: string[];
  process: string;
  deliverables: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: ServiceDetails;
}