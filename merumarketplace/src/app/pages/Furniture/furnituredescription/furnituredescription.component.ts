import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-furniture-product',
  templateUrl: './furnituredescription.component.html',
  styleUrls: ['./furnituredescription.component.scss']
})
export class FurnitureProductComponent {
  product = {
    name: 'Modern Leather Sofa',
    description: 'A stylish and comfortable leather sofa for modern living rooms.',
    rating: 4.5,
    reviews: 134,
    price: 799.99,
    originalPrice: 999.99,
    discount: 20,
    material: 'Leather',
    dimensions: '84 x 34 x 34 inches',
    color: ['Black', 'Brown', 'White'],
    inStock: true,
    deliveryTime: '3-5 business days',
  };

  quantity: number = 1;
  selectedColor: string = this.product.color[0]; // Default to first color option

  // Select color
  selectColor(color: string) {
    this.selectedColor = color;
  }

  // Increment quantity
  incrementQuantity() {
    if (this.quantity < 10) { // Assuming a max of 10 items
      this.quantity++;
    }
  }

  // Decrement quantity
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // Method to add to cart
  addToCart() {
    console.log(`Added ${this.quantity} ${this.product.name}(s) to cart with color ${this.selectedColor}`);
    // Add logic to save the cart details
  }

  // Method to buy now
  buyNow() {
    console.log(`Purchasing ${this.quantity} ${this.product.name}(s) with color ${this.selectedColor}`);
    // Add logic to handle the purchase
  }
}
