import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronicspage',
  templateUrl: './electronicspage.component.html',
  styleUrl: './electronicspage.component.scss'
})
export class ElectronicspageComponent {

}


interface Category {
  name: string;
  checked: boolean;
}

interface Brand {
  name: string;
  checked: boolean;
}

interface Feature {
  name: string;
  checked: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  brand: string;
}

export class ElectronicsPageComponent implements OnInit {
  minPrice: number;
  maxPrice: number;
  categories: Category[] = [];
  brands: Brand[] = [];
  features: Feature[] = [];
  showAllCategories: boolean = false;
  showAllBrands: boolean = false;
  sortBy: string = 'Popular';
  priceAsc: boolean = true;
  currentPage: number = 1;
  totalPages: number = 1;
  displayedProducts: Product[] = [];
  allProducts: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeFilters();
    this.loadProducts();
  }

  initializeFilters(): void {
    // Initialize categories, brands, and features
    // This would typically come from a service or API
    this.categories = [
      { name: 'Smartphones', checked: false },
      { name: 'Laptops', checked: false },
      // ... other categories
    ];

    this.brands = [
      { name: 'Apple', checked: false },
      { name: 'Samsung', checked: false },
      // ... other brands
    ];

    this.features = [
      { name: 'Wi-Fi', checked: false },
      { name: 'Bluetooth', checked: false },
      // ... other features
    ];
  }

  applyPriceFilter(): void {
    this.filterProducts();
  }

  filterProducts(): void {
    // Apply all filters (price, category, brand, features)
    let filteredProducts = this.allProducts.filter(product => {
      const priceInRange = (!this.minPrice || product.price >= this.minPrice) &&
                           (!this.maxPrice || product.price <= this.maxPrice);
      const categoryMatch = this.categories.every(cat => !cat.checked || product.category === cat.name);
      const brandMatch = this.brands.every(brand => !brand.checked || product.brand === brand.name);
      const featureMatch = this.features.every(feature => !feature.checked || product.features.includes(feature.name));

      return priceInRange && categoryMatch && brandMatch && featureMatch;
    });

    this.updateDisplayedProducts(filteredProducts);
  }

  toggleCategoryView(): void {
    this.showAllCategories = !this.showAllCategories;
  }

  toggleBrandView(): void {
    this.showAllBrands = !this.showAllBrands;
  }

  sortProducts(criteria: string): void {
    this.sortBy = criteria;
    switch (criteria) {
      case 'Popular':
        // Implement popularity sorting logic
        break;
      case 'Top Sale':
        // Implement top sale sorting logic
        break;
      case 'Latest':
        // Implement latest sorting logic
        break;
      case 'Price':
        this.priceAsc = !this.priceAsc;
        this.displayedProducts.sort((a, b) => this.priceAsc ? a.price - b.price : b.price - a.price);
        break;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedProducts();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedProducts();
    }
  }

  getStarRating(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
  }

  private loadProducts(): void {
    // This would typically be an API call
    // For now, we'll just simulate some products
    this.allProducts = [
      { id: 1, name: 'Smartphone X', price: 999, imageUrl: 'path/to/image.jpg', rating: 4.5, reviewCount: 120, brand: 'TechBrand' },
      // ... more products
    ];
    this.updateDisplayedProducts();
  }

  private updateDisplayedProducts(filteredProducts?: Product[]): void {
    const productsToDisplay = filteredProducts || this.allProducts;
    const itemsPerPage = 20; // Adjust as needed
    this.totalPages = Math.ceil(productsToDisplay.length / itemsPerPage);
    const startIndex = (this.currentPage - 1) * itemsPerPage;
    this.displayedProducts = productsToDisplay.slice(startIndex, startIndex + itemsPerPage);
  }
}