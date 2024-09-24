import { Component, OnInit } from '@angular/core';

interface SecondhandItem {
  name: string;
  category: string;
  description: string;
  condition: string;
  age: string;
  originalPrice: number;
  currentPrice: number;
  location: string;
  sellerName: string;
  sellerRating: number;
  images: string[];
  features: string[];
  flaws: string[];
}

@Component({
  selector: 'app-secondhand-item',
  templateUrl: './secondhanddescription.component.html', // Ensure this matches the actual HTML file
  styleUrls: ['./secondhanddescription.component.scss']
})
export class SecondhandItemComponent implements OnInit {
  item: SecondhandItem = {
    name: 'Vintage Leather Armchair',
    category: 'Furniture',
    description: 'Classic mid-century modern leather armchair in good condition',
    condition: 'Good',
    age: '20 years',
    originalPrice: 800,
    currentPrice: 250,
    location: 'Brooklyn, NY',
    sellerName: 'VintageFinds123',
    sellerRating: 4.8,
    images: ['chair1.jpg', 'chair2.jpg', 'chair3.jpg'],
    features: ['Genuine leather', 'Solid wood frame', 'Comfortable padding'],
    flaws: ['Minor scratches on armrests', 'Slight discoloration on back cushion']
  };

  currentImageIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.item.images.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.item.images.length) % this.item.images.length;
  }

  calculateDiscount(): number {
    return Math.round(((this.item.originalPrice - this.item.currentPrice) / this.item.originalPrice) * 100);
  }
}
