import { MenuItem } from 'primeng/api';
import { Component } from '@angular/core';
import { Licencia } from '../licencia';
import { LicenciasService } from '../licencias.service';
import { FilterItem } from '@congreso/ng-admin';

@Component({
  selector: 'app-licencias-list',
  templateUrl: './licencias-list.component.html',
  styleUrls: ['./licencias-list.component.scss'],
})
export class LicenciasListComponent {
  licencias: Licencia[] = [];

  filters: FilterItem[] = [
    {
      label: 'Periodo',
      value: {
        id: '2021',
        text: '2021-2026',
      },
      pin: true,
    },
  ];

  exportOptions: MenuItem[] = [
    {
      label: 'Todo',
      icon: 'pi pi-fw pi-copy',
    },
    {
      label: 'Pendientes',
      icon: 'pi pi-fw pi-file',
    },
  ];

  constructor(private licenciasService: LicenciasService) {}

  licenciaLoad() {
    this.licenciasService.get().subscribe((data) => (this.licencias = data));
  }
}
