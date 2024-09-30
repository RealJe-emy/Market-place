import { Component, OnInit } from '@angular/core';

interface Rental {
  id: number;
  name: string;
  type: 'airbnb' | 'house' | 'bike';
  description: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
}

@Component({
  selector: 'app-rental-listings',
  templateUrl: './rentalspage.component.html',
  styleUrls: ['./rentalspage.component.scss']
})
export class RentalListingsComponent implements OnInit {
  rentals: Rental[] = [];
  filteredRentals: Rental[] = [];
  selectedRentalType: string = '';
  selectedPriceRange: number = 10000;
  selectedRating: string = '';
  selectedSort: string = 'price';
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPages: number = 1;

  ngOnInit() {
    this.fetchRentals();
  }

  fetchRentals() {
    // This is mock data. In a real application, you would fetch this from an API.
    this.rentals = [
      {
        id: 1,
        name: 'Cozy Apartment',
        type: 'airbnb',
        description: 'A lovely apartment in the heart of the city',
        image: 'assets/apartment.jpg',
        price: 5000,
        rating: 4.5,
        reviewCount: 120
      },
      {
        id: 2,
        name: 'Spacious House',
        type: 'house',
        description: 'Perfect for families, with a large garden',
        image: 'assets/house.jpg',
        price: 8000,
        rating: 4.2,
        reviewCount: 85
      },
      {
        id: 3,
        name: 'Mountain Bike',
        type: 'bike',
        description: 'Great for exploring trails and nature',
        image: 'assets/bike.jpg',
        price: 1000,
        rating: 4.8,
        reviewCount: 200
      },
      // Add more rental objects here
    ];
    this.applyFilters();
  }

  applyFilters() {
    this.filteredRentals = this.rentals.filter(rental => {
      return (
        (this.selectedRentalType === '' || rental.type === this.selectedRentalType) &&
        rental.price <= this.selectedPriceRange &&
        (this.selectedRating === '' || rental.rating >= parseFloat(this.selectedRating))
      );
    });
    this.sortRentals();
    this.updatePagination();
  }

  sortRentals() {
    this.filteredRentals.sort((a, b) => {
      if (this.selectedSort === 'price') return a.price - b.price;
      if (this.selectedSort === 'price-desc') return b.price - a.price;
      if (this.selectedSort === 'rating') return b.rating - a.rating;
      return 0;
    });
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredRentals.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  changePage(direction: number) {
    this.currentPage += direction;
    if (this.currentPage < 1) this.currentPage = 1;
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
  }

  get paginatedRentals(): Rental[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredRentals.slice(startIndex, startIndex + this.itemsPerPage);
  }

  bookRental(rentalId: number) {
    // Implement booking logic here
    console.log(`Booking rental with ID: ${rentalId}`);
  }

  getStars(rating: number): string {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  }
}