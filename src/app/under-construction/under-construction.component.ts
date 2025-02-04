import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.css'
})
export class UnderConstructionComponent implements OnInit {
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    // Date cible : 14 juillet 2027 à 14h14min14s
    const targetDate = new Date('2027-07-14T14:14:14').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Si le compte à rebours est terminé
      if (distance < 0) {
        clearInterval(interval);
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        return;
      }

      // Calcul des jours, heures, minutes et secondes
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
    }, 1000);
  }
}
