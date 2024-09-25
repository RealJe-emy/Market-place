import { Component } from '@angular/core';

@Component({
  selector: 'app-wifiservice',
  templateUrl: './wifiservice.component.html',
  styleUrl: './wifiservice.component.scss'
})
export class WifiserviceComponent {
toggleContact() {
throw new Error('Method not implemented.');
}
service: any;
showContact: any;

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

@Component({
  selector: 'app-laundry-service',
  templateUrl: './wifiservice.component.html',
  styleUrls: ['./wifiservice.component.scss']
})
export class WifiserviceComponentServiceComponent {
  service: LaundryService = {
    name: 'WifiProvider',
    description: 'Fast and Reliable internet.',
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