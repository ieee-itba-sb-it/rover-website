  import { AfterViewInit, Component, ElementRef, inject, signal } from '@angular/core';
  import { CountdownComponent } from './countdown/countdown';
  import { CarouselComponent } from './carousel/carousel';
  import { FooterComponent } from './footer/footer';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [CountdownComponent, CarouselComponent, FooterComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
  })
  export class App implements AfterViewInit {
    private el = inject(ElementRef);

    title = signal('Proyecto Rover');
    subtitle = signal('Subtitulo Rover');

    ngAfterViewInit() {
      const section = this.el.nativeElement.querySelector('.vision-banner');

      if (!section) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Activamos la animación
            section.classList.add('visible');

            // Dejamos de observar la sección para que la animación no se apague al scrollear
            observer.unobserve(section);
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(section);
    }

    features = signal([
      {
        id: 'locomocion-y-chasis',
        title: 'Locomocion y chasis',
        text: 'Diseña la estructura y el sistema de movilidad del rover, asegurando estabilidad, maniobrabilidad e integración mecánica con el resto de los subsistemas.',
        integrantes: ['Juan Lanoel', 'Luciano Matías Lizarraga Stefani', 'Daniel Salinas', 'Lucas Ignacio Minniti', 'Valentino Mosca Cofiño', 'Andres Chouela', 'Eloísa Aleman Monch', 'Tiago Leonel Segovia'],
      },
      {
        id: 'brazo-manipulador-y-drilling',
        title: 'Brazo manipulador y drilling',
        text: 'Desarrolla el brazo robótico y el sistema de perforación para recolectar muestras, incluyendo su diseño, control e interacción con el terreno.',
        integrantes: ['Jonathan Lucas Blankleder'],
      },
      {
        id: 'electronica-y-sistemas-de-potencia',
        title: 'Electronica y sistemas de potencia',
        text: 'Se encarga de la energía, el control y la seguridad eléctrica del rover, integrando sensores, actuadores y sistemas de distribución de potencia.',
        integrantes: ['Matías Bélico'],
      },
      {
        id: 'telecomunicaciones',
        title: 'Telecomunicaciones',
        text: 'Garantiza la comunicación entre el rover y la estación base, permitiendo el control remoto y la transmisión confiable de datos y telemetría.',
        integrantes: ['Juan Ignacio Fogolin Lagares', 'Juan Luis Brusasca'],
      },
      {
        id: 'software-y-autonomia',
        title: 'Software y autonomia',
        text: 'Desarrolla el software del rover, incluyendo navegación, procesamiento de sensores y toma de decisiones para operación autónoma y teleoperada.',
        integrantes: ['Gerónimo Asin', 'Augusto Felipe Ospal', 'Azul Grelle', 'Morena Diaz Macchi'],
      },
      {
        id: 'ciencia',
        title: 'Ciencia',
        text: 'Define los objetivos científicos de la misión y diseña los instrumentos y procedimientos para recolectar, analizar y documentar datos del entorno.',
        integrantes: ['Ana Tamagnini', 'Facundo Tomás Cassano Nieto', 'Facundo Ortega'],
      },
      {
        id: 'dron',
        title: 'Dron',
        text: 'Diseña e integra el dron que acompaña al rover, proporcionando visión aérea para navegación, detección de obstáculos y asistencia en la misión.',
        integrantes: ['Bautista Rojo', 'Lautaro Martinez', 'Lorenzo Pizzuto Beltran'],
      },
    ]);
  }
