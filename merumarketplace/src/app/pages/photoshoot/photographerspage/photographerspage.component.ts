import { Component } from '@angular/core';

@Component({
  selector: 'app-photographerspage',
  templateUrl: './photographerspage.component.html',
  styleUrl: './photographerspage.component.scss'
})
export class PhotographerspageComponent {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  profileImage: string;
  contactInfo?: ContactInfo; // Optional, can be added when showing contact

}
// src/app/models/photographer.model.ts


export interface ContactInfo {
  email: string;
  phone: string;
  // Add more fields as necessary
}
