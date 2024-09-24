// drinks-page.component.ts
import { Component, OnInit } from '@angular/core';

interface DrinkVolume {
  size: number;
  available: boolean;
}

interface DrinkFlavor {
  name: string;
  color: string;
}

@Component({
  selector: 'app-drinks-page',
  templateUrl: './drinksdescriptionpage.component.html',
  styleUrls: ['./drinksdescriptionpage.component.scss']
})
export class DrinksPageComponent implements OnInit {
  drink = {
    id: '',
    name: '',
    description: '',
    price: 0,
    originalPrice: 0,
    discount: 0,
    rating: 0,
    reviewCount: 0,
    mainImage: '',
    thumbnails: [],
    volumes: [] as DrinkVolume[],
    flavors: [] as DrinkFlavor[],
    quantity: 1
  };

  breadcrumbs: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadDrinkData();
  }

  loadDrinkData() {
    // Simulating data fetch
    this.drink = {
      id: '12345678',
      name: 'Premium Fruit Juice',
      description: 'Refreshing and all-natural fruit juice made from the finest ingredients.',
      price: 249,
      originalPrice: 349,
      discount: 29,
      rating: 4.7,
      reviewCount: 183,
      mainImage: 'path-to-main-image.jpg',
      thumbnails: ['thumb1.jpg', 'thumb2.jpg', 'thumb3.jpg', 'thumb4.jpg', 'thumb5.jpg'],
      volumes: [
        { size: 250, available: true },
        { size: 500, available: true },
        { size: 1000, available: true }
      ],
      flavors: [
        { name: 'Orange', color: '#FFA500' },
        { name: 'Apple', color: '#00FF00' },
        { name: 'Berry', color: '#8B008B' }
      ],
      quantity: 1
    };

    this.breadcrumbs = ['Drinks', 'Fruit Juices', 'Premium Fruit Juice'];
  }

  addToCart() {
    console.log('Added to cart:', this.drink);
  }

  buyNow() {
    console.log('Buy now:', this.drink);
  }

  updateQuantity(change: number) {
    this.drink.quantity = Math.max(1, this.drink.quantity + change);
  }
}