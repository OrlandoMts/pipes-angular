import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Pipes de angular',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Textos y fechas',
                        icon: 'pi pi-align-left',
                        routerLink: '/'
                    },
                    {
                        label: 'Números',
                        icon: 'pi pi-dollar',
                        routerLink: 'numeros'
                    },
                    {
                        label: 'No comunes',
                        icon: 'pi pi-globe',
                        routerLink: 'no-comunes'
                    },
                    {
                        label: 'Ordenar',
                        icon: 'pi pi-arrows-v',
                        routerLink: 'ordenar'
                    }
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog'
            }
        ];
    }

}
