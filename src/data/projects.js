import { images } from './images';

// SAMPLE / EDITABLE project data — illustrative placeholders, not real projects.
// Replace with actual project information when available.

export const projects = [
  {
    id: 'modern-residence',
    name: 'Modern Residence',
    category: 'Residential',
    location: 'Chennai, Tamil Nadu',
    capacity: '5 kW',
    image: images.projResidential,
    systemType: 'On-Grid Rooftop Solar',
    description:
      'A 5 kW rooftop solar system on a modern residential home, designed to cover the majority of daytime electricity consumption.',
    featured: true,
  },
  {
    id: 'office-building',
    name: 'Office Building',
    category: 'Commercial',
    location: 'Chennai, Tamil Nadu',
    capacity: '25 kW',
    image: images.projCommercial,
    systemType: 'Hybrid Rooftop Solar',
    description:
      'A 25 kW hybrid solar installation for a commercial office building, combining on-grid generation with battery backup.',
  },
  {
    id: 'industrial-facility',
    name: 'Industrial Facility',
    category: 'Industrial',
    location: 'Tamil Nadu',
    capacity: '100 kW',
    image: images.projIndustrial,
    systemType: 'Industrial On-Grid Solar',
    description:
      'A 100 kW industrial rooftop solar system engineered to significantly reduce energy costs for a manufacturing facility.',
  },
  {
    id: 'greenfield-array',
    name: 'Greenfield Array',
    category: 'Industrial',
    location: 'Coimbatore, Tamil Nadu',
    capacity: '500 kW',
    image: images.projSolarFarm,
    systemType: 'Ground-Mounted Solar',
    description:
      'A large ground-mounted solar array generating clean energy at scale for industrial consumption and grid feed-in.',
  },
  {
    id: 'sunrise-villa',
    name: 'Sunrise Villa',
    category: 'Residential',
    location: 'Madurai, Tamil Nadu',
    capacity: '3 kW',
    image: images.projRooftop,
    systemType: 'Off-Grid Rooftop Solar',
    description:
      'A 3 kW off-grid solar system with battery storage for a residential villa in a semi-urban area.',
  },
  {
    id: 'solar-carport',
    name: 'Solar Carport',
    category: 'Commercial',
    location: 'Bengaluru, Karnataka',
    capacity: '40 kW',
    image: images.projParking,
    systemType: 'Solar Carport',
    description:
      'An innovative solar carport turning a commercial parking area into a clean energy generation asset.',
  },
  {
    id: 'green-acres',
    name: 'Green Acres Community',
    category: 'Residential',
    location: 'Salem, Tamil Nadu',
    capacity: '15 kW',
    image: images.projAerial,
    systemType: 'Community Rooftop Solar',
    description:
      'A community solar installation powering shared facilities across a residential community layout.',
  },
  {
    id: 'eco-logistics',
    name: 'Eco Logistics Hub',
    category: 'Industrial',
    location: 'Hosur, Tamil Nadu',
    capacity: '75 kW',
    image: images.projIndustrial2,
    systemType: 'Industrial Rooftop Solar',
    description:
      'A 75 kW rooftop solar system on a logistics warehouse, reducing operational energy costs.',
  },
  {
    id: 'eco-modern-home',
    name: 'Eco Modern Home',
    category: 'Residential',
    location: 'Chennai, Tamil Nadu',
    capacity: '8 kW',
    image: images.projModern,
    systemType: 'Hybrid Rooftop Solar',
    description:
      'An 8 kW hybrid solar system on a newly built eco-home with smart monitoring and battery backup.',
  },
];

export const projectFilters = ['All', 'Residential', 'Commercial', 'Industrial'];
