import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Evento } from 'src/app/models/evento.model'

@Component({
  standalone: true,
  imports: [MatIconModule],
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})

export class CarrouselComponent implements OnInit {
  currentIndex = 0;
  startX: any;
    
  constructor(
    // private eventosService: EventosService
  ) {}

  onRadioClick(color: string) {
    const element = document.getElementById('fondo');
    if (element) {
      element.style.backgroundColor = color; // Cambiar a cualquier color que desee
    }
  }
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }
  onTouchMove(event: TouchEvent) {
    if (this.startX === null) {
      return;
    }
  
    const currentX = event.touches[0].clientX;
    const deltaX = this.startX - currentX;
  
    if (deltaX > 50) { // umbral de 50px para cambiar de imagen
      this.currentIndex++;
      this.startX = null;
    } else if (deltaX < -50) { // umbral de -50px para cambiar de imagen
      this.currentIndex--;
      this.startX = null;
    }
  }

  ngOnInit(): void {
      // this.eventosService.getById(7).subscribe((resp) => {
      //   console.log(resp)
      // })
  }
}
