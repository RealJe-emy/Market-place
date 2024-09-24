import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicspageComponent } from './electronicspage.component';

describe('ElectronicspageComponent', () => {
  let component: ElectronicspageComponent;
  let fixture: ComponentFixture<ElectronicspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectronicspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  brand: string;
  category: string;
  features: string[];
}

@Component({
  selector: 'app-electronics-page',
  templateUrl: './electronicspage.component.html',
  styleUrls: ['./electronicspage.component.scss']
})
export class ElectronicsPageComponent implements OnInit {
  minPrice: number;
  maxPrice: number;
  categories: { name: string; checked: boolean }[] = [
    { name: 'Smartphones', checked: false },
    { name: 'Laptops', checked: false },
    { name: 'Tablets', checked: false },
    { name: 'Smart Home', checked: false },
    { name: 'Audio', checked: false },
  ];
  brands: { name: string; checked: boolean }[] = [
    { name: 'Apple', checked: false },
    { name: 'Samsung', checked: false },
    { name: 'Sony', checked: false },
    { name: 'LG', checked: false },
    { name: 'Lenovo', checked: false },
  ];
  features: { name: string; checked: boolean }[] = [
    { name: 'Wi-Fi', checked: false },
    { name: 'Bluetooth', checked: false },
    { name: '5G', checked: false },
    { name: 'Water Resistant', checked: false },
  ];
  showAllCategories = false;
  showAllBrands = false;
  sortBy = 'Popular';
  priceAsc = true;
  currentPage = 1;
  totalPages = 50;
  productsPerPage = 8;

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13 Pro',
      price: 999,
      imageUrl: 'assets/iphone-13-pro.jpg',
      rating: 4.8,
      reviewCount: 1245,
      brand: 'Apple',
      category: 'Smartphones',
      features: ['5G', 'Water Resistant']
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      price: 799,
      imageUrl: 'assets/galaxy-s21.jpg',
      rating: 4.5,
      reviewCount: 980,
      brand: 'Samsung',
      category: 'Smartphones',
      features: ['5G', 'Water Resistant']
    },
    // Add more product data here
  ];

  displayedProducts: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterProducts();
  }

  applyPriceFilter(): void {
    this.filterProducts();
  }

  filterProducts(): void {
    this.displayedProducts = this.products.filter(product => {
      const priceInRange = (!this.minPrice || product.price >= this.minPrice) &&
                           (!this.maxPrice || product.price <= this.maxPrice);
      const categoryMatch = this.categories.every(cat => !cat.checked) ||
                            this.categories.some(cat => cat.checked && cat.name === product.category);
      const brandMatch = this.brands.every(brand => !brand.checked) ||
                         this.brands.some(brand => brand.checked && brand.name === product.brand);
      const featureMatch = this.features.every(feature => !feature.checked) ||
                           this.features.some(feature => feature.checked && product.features.includes(feature.name));

      return priceInRange && categoryMatch && brandMatch && featureMatch;
    });

    this.sortProducts(this.sortBy);
  }

  sortProducts(criteria: string): void {
    this.sortBy = criteria;
    switch (criteria) {
      case 'Popular':
        // Implement popularity sorting logic (e.g., by review count)
        this.displayedProducts.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'Top Sale':
        // Implement top sale sorting logic (you might need additional data for this)
        break;
      case 'Latest':
        // Implement latest sorting logic (you might need a 'dateAdded' field for products)
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

  updateDisplayedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    this.displayedProducts = this.products.slice(startIndex, startIndex + this.productsPerPage);
  }

  toggleCategoryView(): void {
    this.showAllCategories = !this.showAllCategories;
  }

  toggleBrandView(): void {
    this.showAllBrands = !this.showAllBrands;
  }

  getStarRating(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
  }
}