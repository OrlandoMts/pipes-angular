import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'orlando';
  nombreUpper: string = 'ORLANDO';
  nombreCompleto: string = 'oRlaNdO montES';

  // Reomendacion de la libreria moment.js para manipulacion de fechas
  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
