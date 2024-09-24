import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './kitchendescription.component.html',
  styleUrls: ['./kitchendescription.component.scss']
})
export class ProductPageComponent {
  productName = 'Jaza Keja 2 Layer Microwave Oven Rack Steel Pipe Support Moisture Rust Proof Kitchen Countertop Organizer Microwave Stand Utensils Tableware Storage Shelf';
  productRating = 4.5;
  productReviews = 71;
  productPrice = 'KSh 1,199';
  originalPrice = 'KSh 1,599';
  productDescription = 'Jaza Keja 2 Layer Microwave Oven Rack Steel Pipe Support Moisture Rust Proof Kitchen Countertop Organizer Microwave Stand Utensils Tableware Storage Shelf';

  addToCart() {
    // Implement logic to add the product to the cart
    console.log('Product added to cart');
  }

  buyNow() {
    // Implement logic to buy the product
    console.log('Proceed to buy product');
  }
}
