import { Component, input } from '@angular/core'; // Usamos 'input' (signal-based)
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class CarouselComponent {
  // Definimos el input como un signal
  // El hijo recibirá la lista de features desde el padre
  items = input.required<{ title: string; text: string }[]>();

  responsiveOptions = [
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];
}
