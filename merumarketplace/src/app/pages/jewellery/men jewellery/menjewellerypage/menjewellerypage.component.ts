
}
import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  // Add more properties as needed
}

@Component({
  selector: 'app-mens-jewelry',
  templateUrl: './menjewellerypage.component.html',
  styleUrls: ['./menjewellerypage.component.scss']
})
export class MensJewelryComponent implements OnInit {
  searchResultTitle: string = 'Men\'s Jewelry';
  minPrice: number = 0;
  maxPrice: number = 1000;
  categories: string[] = ['Necklaces', 'Bracelets', 'Rings', 'Watches'];
  materials: string[] = ['Gold', 'Silver', 'Stainless Steel', 'Leather'];
  brands: string[] = ['Brand 1', 'Brand 2', 'Brand 3'];
  sortOptions: string[] = ['Popular', 'Top Sale', 'Latest', 'Price'];
  currentPage: number = 1;
  totalPages: number = 10;
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    // Implement logic to load products from a service
    // This is a placeholder implementation
    this.products = [
      { id: 1, name: 'Gold Chain', price: 299.99, imageUrl: 'assets/gold-chain.jpg' },
      { id: 2, name: 'Silver Bracelet', price: 89.99, imageUrl: 'assets/silver-bracelet.jpg' },
      // Add more product objects
    ];
  }

  applyPriceFilter(): void {
    console.log(`Filtering products between $${this.minPrice} and $${this.maxPrice}`);
    // Implement price filtering logic
  }

  filterByCategory(category: string): void {
    console.log(`Filtering by category: ${category}`);
    // Implement category filtering logic
  }

  filterByMaterial(material: string): void {
    console.log(`Filtering by material: ${material}`);
    // Implement material filtering logic
  }

  filterByBrand(brand: string): void {
    console.log(`Filtering by brand: ${brand}`);
    // Implement brand filtering logic
  }

  sortBy(option: string): void {
    console.log(`Sorting by: ${option}`);
    // Implement sorting logic
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProducts();
    }
  }
}