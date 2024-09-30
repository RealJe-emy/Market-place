// drinks.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinkpage.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinks = [];
  drinkTypes = ['Liquor', 'Smoothies', 'Milks', 'Juices', 'Coffee', 'Tea'];
  priceOptions = ['$ (Low)', '$$ (Medium)', '$$$ (High)'];
  ratingOptions = ['1+', '2+', '3+', '4+', '5+'];
  sizeOptions = ['Small', 'Medium', 'Large'];

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.drinkService.getDrinks().subscribe(drinks => {
      this.drinks = drinks;
    });
  }

  filterByType(event, type) {
    if (event.target.checked) {
      this.drinks = this.drinks.filter(drink => drink.type === type);
    } else {
      this.drinkService.getDrinks().subscribe(drinks => {
        this.drinks = drinks;
      });
    }
  }

  filterByPrice(event, price) {
    if (event.target.checked) {
      this.drinks = this.drinks.filter(drink => drink.price === price);
    } else {
      this.drinkService.getDrinks().subscribe(drinks => {
        this.drinks = drinks;
      });
    }
  }

  filterByRating(event, rating) {
    if (event.target.checked)