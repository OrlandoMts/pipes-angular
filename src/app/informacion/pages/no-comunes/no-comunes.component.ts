import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Orlando';
  genero: string = 'masculino';

  invitacionMaping = {
    'masculino': 'invitarlo',
    'femenino': ' invitarla'
  };

  //i18nPlural
  clientes: string[] = ['Ashley', 'Daniel', 'Andrea', 'Orlando'];
  clientesMaping = {
    //si ese length tiene:
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'

  }

  cambiarNomber() {
    this.nombre = "Ashley";
    this.genero = "femenino";
  }

  atenderCliente() {
    this.clientes.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
