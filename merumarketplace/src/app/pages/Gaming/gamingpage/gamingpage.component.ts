import { Component, Input } from '@angular/core';
interface GamingService {
  name: string;
  description: string;
  genre: string;
  platform: string;
  releaseDate: string;
  developer: string;
  rating: string;
}

@Component({
  selector: 'app-gamingpage',
  templateUrl: './gamingpage.component.html',
  styleUrl: './gamingpage.component.scss'
})

export class GamingServiceComponent {
  @Input() service!: GamingService;
  showDetails = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
