import { Component } from '@angular/core';

@Component({
  selector: 'app-laundryservice',
  templateUrl: './laundryservice.component.html',
  styleUrl: './laundryservice.component.scss'
})
export class LaundryserviceComponent {

}

// laundry-service.component.ts
import { Component } from '@angular/core';

interface LaundryService {
  name: string;
  description: string;
  price: string;
  turnaroundTime: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}

@Component({
  selector: 'app-laundry-service',
  templateUrl: './laundry-service.component.html',
  styleUrls: ['./laundry-service.component.scss']
})
export class LaundryServiceComponent {
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