import { Component, OnInit } from '@angular/core';

interface Photographer {
  id: number;
  name: string;
  description: string;
  profileImage: string;
  price: number;
  rating: number;
  reviewCount: number;
}

@Component({
  selector: 'app-photoshoot-listings',
  templateUrl: './photographerspage.component.html',
  styleUrls: ['./photographerspage.component.scss']
})
export class PhotoshootListingsComponent implements OnInit {
  photographers: Photographer[] = [];
  selectedPriceRange: number = 10000;
  selectedRating: string = '';
  selectedSort: string = 'price';

  ngOnInit() {
    // Fetch photographers data from an API or service
    this.fetchPhotographers();
  }

  fetchPhotographers() {
    // This is a mock data. In a real application, you would fetch this from an API.
    this.photographers = [
      {
        id: 1,
        name: 'John Doe',
        description: 'Specializes in nature and landscape photography',
        profileImage: 'assets/john-doe.jpg',
        price: 5000,
        rating: 4.5,
        reviewCount: 120
      },
      // Add more photographer objects here
    ];
  }

  showContact(photographerId: number) {
    // Logic to show contact information
    console.log(`Showing contact for photographer ${photographerId}`);
  }

  filterPhotographers() {
    // Implement filtering logic based on selectedPriceRange and selectedRating
    // This is where you'd filter this.photographers array
  }

  sortPhotographers() {
    // Implement sorting logic based on selectedSort
    // This is where you'd sort this.photographers array
  }
}
