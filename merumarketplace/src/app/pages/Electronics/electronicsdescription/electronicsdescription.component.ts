import { Component } from '@angular/core';

@Component({
  selector: 'app-electronicsdescription',
  templateUrl: './electronicsdescription.component.html',
  styleUrl: './electronicsdescription.component.scss'
})
export class ElectronicsdescriptionComponent {

}


// product.component.ts
import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount: number;
  color: string;
  size: string;
  deliveryInfo: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = {
    name: 'Vitron HTC3200S BLUETOOTH TV FRAMELESS TELEVISION 32 Inch Smart Android 11.0 TV Inbuilt Decoder ELECTRONICS HDMI,USB,Netflix,Youtube, APPSTORE + 6 EXTRA ACCESSORIES',
    rating: 4.6,
    reviews: 367,
    price: 14595,
    originalPrice: 18000,
    discount: 19,
    color: 'Black',
    size: '32 inch',
    deliveryInfo: 'Ships from Machakos, arrives in Wagberi within 10-15 workdays.'
  };

  quantity: number = 1;

  constructor() { }

  ngOnInit(): void { }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}