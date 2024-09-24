import { Component, OnInit } from '@angular/core';

interface FurnitureProduct {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount: number;
  material: string;
  dimensions: string;
  color: string[];
  inStock: boolean;
  deliveryTime: string;
}

@Component({
  selector: 'app-furniture-product',
  templateUrl: './furnituredescription.component.html',
  styleUrls: ['./furnituredescription.component.scss']
})
export class FurnitureProductComponent implements OnInit {
  product: FurnitureProduct = {
    name: 'Modern Leather Sofa',
    description: 'Elegant and comfortable 3-seater sofa with genuine leather upholstery',
    rating: 4.7,
    reviews: 253,
    price: 1299.99,
    originalPrice: 1599.99,
    discount: 19,
    material: 'Genuine Leather, Solid Wood Frame',
    dimensions: '84"W x 35"D x 31"H',
    color: ['Black', 'Brown', 'White'],
    inStock: true,
    deliveryTime: 'Ships within 5-7 business days'
  };

  selectedColor: string = this.product.color[0]; // Initialize with the first color
  quantity: number = 1; // Default quantity

  constructor() { }

  ngOnInit(): void { }

  selectColor(color: string): void {
    this.selectedColor = color; // Set the selected color
  }

  incrementQuantity(): void {
    this.quantity++; // Increase quantity
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--; // Decrease quantity, ensuring it doesn't go below 1
    }
  }
}
