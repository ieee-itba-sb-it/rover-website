import { Component, input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

export interface AreaItem {
  id: string;
  title: string;
  text: string;
  integrantes: string[];
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class CarouselComponent {
  items = input.required<AreaItem[]>();

  responsiveOptions = [
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];

  scrollToArea(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

