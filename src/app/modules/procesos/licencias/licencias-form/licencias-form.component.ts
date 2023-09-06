import { Component, OnInit } from '@angular/core';
import { Periodo } from 'src/app/share/model/periodo';
import { PeriodosService } from 'src/app/share/service/periodos.service';

@Component({
  selector: 'app-licencias-form',
  templateUrl: './licencias-form.component.html',
  styleUrls: ['./licencias-form.component.scss'],
})
export class LicenciasFormComponent implements OnInit{
  action: string = 'add';

  periodos: Periodo[] = [];
  congresistas: Periodo[] = [];

  get title() {
    let title = '';

    switch (this.action) {
      case 'add':
        title = 'Nueva licencia';
        break;
      case 'edit':
        title = 'Editar licencia';
        break;
      case 'view':
        title = 'Detalle licencia';
        break;
      default:
        title = 'licencia';
        break;
    }

    return title;
  }

  constructor(private periodosService: PeriodosService) {}

  ngOnInit() {
    this.periodoLoad();
  }

  periodoLoad() {
    this.periodosService.get().subscribe((result) => (this.periodos = result));
  }
}
