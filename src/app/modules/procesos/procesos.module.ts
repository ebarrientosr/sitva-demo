import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcesosComponent } from './procesos.component';
import { ProcesosRoutingModule } from './procesos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProcesosRoutingModule,
  ],
  declarations: [ProcesosComponent],
})
export class ProcesosModule {}
