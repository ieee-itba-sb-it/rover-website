import { Component, input, signal, viewChild } from '@angular/core';
import { CarouselModule, Carousel } from 'primeng/carousel'; // Importamos Carousel

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class CarouselComponent {
  items = input.required<{ title: string; text: string; integrantes: string[] }[]>();

  responsiveOptions = [
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];

  expandedCards = signal<Set<string>>(new Set());

  // Capturamos la referencia del carrusel en el template
  myCarousel = viewChild<Carousel>('myCarousel');

  toggleCard(title: string) {
    this.expandedCards.update((set) => {
      const newSet = new Set(set);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });

    // Control manual del Autoplay
    const carouselInstance = this.myCarousel();
    if (carouselInstance) {
      if (this.expandedCards().size > 0) {
        // Pausamos y ponemos el intervalo en 0 para que el hover no lo reactive
        carouselInstance.autoplayInterval = 0;
        carouselInstance.stopAutoplay();
      } else {
        // Restauramos el intervalo y le damos play
        carouselInstance.autoplayInterval = 3000;
        carouselInstance.startAutoplay();
      }
    }
  }
}
