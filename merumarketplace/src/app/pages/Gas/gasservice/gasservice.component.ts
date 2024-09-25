import { Component } from '@angular/core';

@Component({
  selector: 'app-gasservice',
  templateUrl: './gasservice.component.html',
  styleUrl: './gasservice.component.scss'
})
export class LaundryserviceComponent {

}

// laundry-service.component.ts

interface LaundryService {
  name: string;
  description: string;
  price: string;
  turnaroundTime: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}

export class GasServiceComponent {
  service: LaundryService = {
    name: 'SparkleClean Laundry',
    description: 'Professional wash, dry, and fold service for all your laundry needs.',
    price: 'Starting at $1.50 per pound',
    turnaroundTime: '24-48 hours',
    contactName: 'John Doe',
    contactPhone: '(555) 123-4567',
    contactEmail: 'contact@sparkleclean.com'
  };

  showContact: boolean = false;

  toggleContact() {
    this.showContact = !this.showContact;
  }
}