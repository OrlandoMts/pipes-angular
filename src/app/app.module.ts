import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { InformacionModule } from './informacion/informacion.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

//Cambiar el idioma de la app
import localEsMX from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsMX);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    InformacionModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
