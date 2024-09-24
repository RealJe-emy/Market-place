// import { Component, OnInit } from '@angular/core';

// interface Category {
//   name: string;
//   checked: boolean;
// }

// interface Brand {
//   name: string;
//   checked: boolean;
// }

// interface Feature {
//   name: string;
//   checked: boolean;
// }

// interface Product {
//   name: string;
//   price: number;
//   imageUrl: string;
//   rating: number;
//   reviewCount: number;
//   brand: string;
// }

// @Component({
//   selector: 'app-electronics-page',
//   templateUrl: './electronicspage.component.html',
//   styleUrls: ['./electronicspage.component.scss']
// })
// export class ElectronicsPageComponent implements OnInit {
//   minPrice: number = 0;
//   maxPrice: number = 10000;
//   categories: Category[] = [];
//   brands: Brand[] = [];
//   features: Feature[] = [];
//   displayedProducts: Product[] = [];
//   sortBy: string = 'Popular';
//   priceAsc: boolean = true;
//   currentPage: number = 1;
//   totalPages: number = 1;
//   showAllCategories: boolean = false;
//   showAllBrands: boolean = false;

//   constructor() {}

//   ngOnInit(): void {
//     this.loadCategories();
//     this.loadBrands();
//     this.loadFeatures();
//     this.loadProducts();
//   }

//   loadCategories(): void {
//     // Example category data; replace with actual data from a service
//     this.categories = [
//       { name: 'Electronics', checked: false },
//       { name: 'Appliances', checked: false },
//       { name: 'Computers', checked: false },
//       { name: 'Accessories', checked: false }
//     ];
//   }

//   loadBrands(): void {
//     // Example brand data; replace with actual data from a service
//     this.brands = [
//       { name: 'Brand A', checked: false },
//       { name: 'Brand B', checked: false },
//       { name: 'Brand C', checked: false }
//     ];
//   }

//   loadFeatures(): void {
//     // Example feature data; replace with actual data from a service
//     this.features = [
//       { name: 'Water Resistant', checked: false },
//       { name: 'Bluetooth', checked: false },
//       { name: 'WiFi Enabled', checked: false }
//     ];
//   }

//   loadProducts(): void {
//     // Example product data; replace with actual data from a service
//     this.displayedProducts = [
//       { name: 'Product 1', price: 5000, imageUrl: 'path/to/image1.jpg', rating: 4.5, reviewCount: 10, brand: 'Brand A' },
//       { name: 'Product 2', price: 8000, imageUrl: 'path/to/image2.jpg', rating: 4.0, reviewCount: 5, brand: 'Brand B' },
//       // Add more products as needed
//     ];
//     this.totalPages = Math.ceil(this.displayedProducts.length / 10); // Example pagination
//   }

//   applyPriceFilter(minPrice: string, maxPrice: string): void {
//     const min = parseFloat(minPrice);
//     const max = parseFloat(maxPrice);
    
//     // Filter products based on price
//     this.displayedProducts = this.displayedProducts.filter(product => 
//       product.price >= min && product.price <= max
//     );
//   }

//   filterProducts(item: Category | Brand | Feature): void {
//     // Example filter logic; implement based on your requirements
//     if ('checked' in item) {
//       item.checked = !item.checked;
//     }
//     // Apply filtering logic based on selected categories, brands, or features
//   }

//   toggleCategoryView(): void {
//     this.showAllCategories = !this.showAllCategories;
//     // Optionally load more categories if needed
//   }

//   toggleBrandView(): void {
//     this.showAllBrands = !this.showAllBrands;
//     // Optionally load more brands if needed
//   }

//   sortProducts(sortBy: string): void {
//     this.sortBy = sortBy;
//     // Sort logic here based on sortBy
//     // Implement sorting logic based on price, popularity, etc.
//   }

//   previousPage(): void {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       // Logic to update displayed products for the new page
//     }
//   }

//   nextPage(): void {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//       // Logic to update displayed products for the new page
//     }
//   }

//   getStarRating(rating: number): string {
//     // Method to generate star rating HTML or return a string representation
//     return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
//   }
// }
