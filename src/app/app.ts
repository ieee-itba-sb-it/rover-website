import { Component, signal } from '@angular/core';
import { CountdownComponent } from './countdown/countdown';
import { CarouselComponent } from './carousel/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountdownComponent, CarouselComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('Titulo Rover');
  subtitle = signal('Subtitulo Rover');

  features = signal([
    { title: 'Locomocion y chasis', text: 'Descripcion.' },
    { title: 'Brazo manipulador y drilling', text: 'Descripcion.' },
    { title: 'Electronica y sistemas de potencia', text: 'Descripcion.' },
    { title: 'Telecomunicaciones', text: 'Descripcion.' },
    { title: 'Software y autonomia', text: 'Descripcion.' },
    { title: 'Ciencia', text: 'Descripcion.' },
  ]);
}
