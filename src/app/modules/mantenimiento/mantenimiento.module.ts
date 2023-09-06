import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoComponent } from './mantenimiento.component';
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { ModalidadesComponent } from './modalidades/modalidades.component';
import { HorariosComponent } from './horarios/horarios.component';

@NgModule({
  imports: [CommonModule, MantenimientoRoutingModule],
  declarations: [
    MantenimientoComponent,
    ModalidadesComponent,
    HorariosComponent,
  ],
})
export class MantenimientoModule {}
