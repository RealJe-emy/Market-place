// laundry-service-detail.component.ts
import { Component } from '@angular/core';

interface LaundryService {
  name: string;
  description: string;
  services: string[];
  pricing: { service: string; price: string }[];
  turnaroundTime: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  address: string;
  hours: string[];
}

@Component({
  selector: 'app-laundry-service-detail',
  templateUrl: './gasdescription.component.html',
  styleUrls: ['./gasdescription.component.scss']
})
export class LaundryServiceDetailComponent {
  service: LaundryService = {
    name: 'SparkleClean Laundry',
    description: 'Professional wash, dry, and fold service for all your laundry needs. We use eco-friendly detergents and offer a range of services to meet your specific requirements.',
    services: [
      'Wash & Fold',
      'Dry Cleaning',
      'Alterations',
      'Stain Removal',
      'Delicate Item Care'
    ],
    pricing: [
      { service: 'Wash & Fold', price: '$1.50 per pound' },
      { service: 'Dry Cleaning', price: 'Starting at $5 per item' },
      { service: 'Alterations', price: 'Starting at $10' }
    ],
    turnaroundTime: '24-48 hours for standard service, same-day service available',
    contactName: 'John Doe',
    contactPhone: '(555) 123-4567',
    contactEmail: 'contact@sparkleclean.com',
    address: '123 Main St, Anytown, USA 12345',
    hours: [
      'Monday - Friday: 7:00 AM - 8:00 PM',
      'Saturday: 8:00 AM - 6:00 PM',
      'Sunday: 10:00 AM - 4:00 PM'
    ]
  };
}