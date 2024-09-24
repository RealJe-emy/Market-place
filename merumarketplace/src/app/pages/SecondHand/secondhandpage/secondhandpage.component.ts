
import { Component, OnInit } from '@angular/core';
import { SecondhandItem } from '../models/secondhand-item.model';

export interface SecondhandItem {
  id: number;
  name: string;
  price: number;
  condition: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-secondhand-items',
  templateUrl: './secondhand-items.component.html',
  styleUrls: ['./secondhand-items.component.scss']
})
export class SecondhandItemsComponent implements OnInit {
  secondhandItems: SecondhandItem[] = [
    {
      id: 1,
      name: 'Gently Used Laptop',
      price: 500,
      condition: 'Good',
      description: 'A gently used laptop with 8GB of RAM and a 256GB SSD.',
      imageUrl: 'https://via.placeholder.com/200x150'
    },
    {
      id: 2,
      name: 'Vintage Watch',
      price: 200,
      condition: 'Fair',
      description: 'A vintage watch with a leather strap and a quartz movement.',
      imageUrl: 'https://via.placeholder.com/200x150'
    },
    {
      id: 3,
      name: 'Used Bookshelf',
      price: 100,
      condition: 'Good',
      description: 'A used bookshelf with 5 shelves and a sturdy frame.',
      imageUrl: 'https://via.placeholder.com/200x150'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item: SecondhandItem): void {
    console.log(`Added ${item.name} to cart`);
    // Add item to cart logic here
  }
}
