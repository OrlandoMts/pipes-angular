import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  documentosAlmacenados: number = 1234567123;
  porcentaje: number = 0.23;
  ventasTotal: number = 1234567123;

  constructor() { }

  ngOnInit(): void {
  }

}
