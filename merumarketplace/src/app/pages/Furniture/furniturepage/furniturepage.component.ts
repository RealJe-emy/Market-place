import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniturepage.component.html',
  styleUrls: ['./furniturepage.component.scss']
})
export class FurnitureComponent {}

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  shipper: string;
  category: string;
}

@Component({
  selector: 'app-furniture-page',
  templateUrl: './furniturepage.component.html',
  styleUrls: ['./furniturepage.component.scss']
})
export class FurniturePageComponent implements OnInit {
  minPrice: number | undefined;
  maxPrice: number | undefined;
  categories: { name: string; checked: boolean }[] = [
    { name: 'Bed Pillows', checked: false },
    { name: 'Duvet Cover Sets', checked: false },
    { name: 'Duvet Covers', checked: false },
    { name: 'Bed Blankets', checked: false },
  ];
  shippers: { name: string; checked: boolean }[] = [
    { name: 'Fulfilled By Kilimall', checked: false },
    { name: 'Oversea Shipment', checked: false },
    { name: 'Local Dispatch', checked: false },
  ];
  brands: { name: string; checked: boolean }[] = [
    { name: 'Generic', checked: false },
    { name: 'TC', checked: false },
    { name: 'Dong Fang', checked: false },
    { name: 'Mara', checked: false },
  ];
  showAllCategories = false;
  showAllBrands = false;
  sortBy = 'Popular';
  priceAsc = true;
  currentPage = 1;
  totalPages = 278;
  productsPerPage = 8;

  products: Product[] = [
    {
      id: 1,
      name: 'New Solar Light PIR Motion Sensor Garden Outdoor LED Street Lamp',
      price: 859,
      imageUrl: 'assets/solar-light.jpg',
      rating: 4,
      reviewCount: 614,
      shipper: 'Fulfilled By Kilimall',
      category: 'Outdoor'
    },
    // ... Add more product data here
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
      const shipperMatch = this.shippers.every(ship => !ship.checked) ||
                           this.shippers.some(ship => ship.checked && ship.name === product.shipper);
      // Add brand filtering logic here if needed

      return priceInRange && categoryMatch && shipperMatch;
    });

    this.sortProducts(this.sortBy);
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
