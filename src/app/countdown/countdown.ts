import { Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class CountdownComponent implements OnInit, OnDestroy {
  private targetDate = new Date(2027, 9, 4, 12, 0, 0).getTime();

  days = signal(0);
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);

  private timerInterval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.updateTicker();
    this.timerInterval = setInterval(() => this.updateTicker(), 1000);
  }

  updateTicker() {
    const now = new Date().getTime();
    const diff = this.targetDate - now;

    if (diff > 0) {
      this.days.set(Math.floor(diff / (1000 * 60 * 60 * 24)));
      this.hours.set(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutes.set(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      this.seconds.set(Math.floor((diff % (1000 * 60)) / 1000));
    }
  }

  ngOnDestroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }
}
