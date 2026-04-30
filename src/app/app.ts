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

  features = signal([
    {
      title: 'Locomocion y chasis',
      text: 'Diseña la estructura y el sistema de movilidad del rover, asegurando estabilidad, maniobrabilidad e integración mecánica con el resto de los subsistemas.',
    },
    {
      title: 'Brazo manipulador y drilling',
      text: 'Desarrolla el brazo robótico y el sistema de perforación para recolectar muestras, incluyendo su diseño, control e interacción con el terreno.',
    },
    {
      title: 'Electronica y sistemas de potencia',
      text: 'Se encarga de la energía, el control y la seguridad eléctrica del rover, integrando sensores, actuadores y sistemas de distribución de potencia.',
    },
    {
      title: 'Telecomunicaciones',
      text: 'Garantiza la comunicación entre el rover y la estación base, permitiendo el control remoto y la transmisión confiable de datos y telemetría.',
    },
    {
      title: 'Software y autonomia',
      text: 'Desarrolla el software del rover, incluyendo navegación, procesamiento de sensores y toma de decisiones para operación autónoma y teleoperada.',
    },
    {
      title: 'Ciencia',
      text: 'Define los objetivos científicos de la misión y diseña los instrumentos y procedimientos para recolectar, analizar y documentar datos del entorno.',
    },
    {
      title: 'Dron',
      text: 'Diseña e integra el dron que acompaña al rover, proporcionando visión aérea para navegación, detección de obstáculos y asistencia en la misión.',
    },
  ]);
}
