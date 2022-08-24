import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './informacion/pages/basicos/basicos.component';
import { NoComunesComponent } from './informacion/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './informacion/pages/numeros/numeros.component';
import { OrdenarComponent } from './informacion/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRouterModule { }
