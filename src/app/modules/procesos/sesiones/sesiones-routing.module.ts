import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionesListComponent } from './sesiones-list/sesiones-list.component';
import { SesionesFormComponent } from './sesiones-form/sesionesForm.component';
import { SesionesControlComponent } from './sesiones-control/sesiones-control.component';

const routes: Routes = [
  {
    path: '',
    component: SesionesListComponent,
  },
  {
    path: 'agregar',
    component: SesionesFormComponent,
    data: {
      action: 'add',
    },
  },
  {
    path: ':id/editar',
    component: SesionesFormComponent,
    data: {
      action: 'edit',
    },
  },
  {
    path: ':id/ver',
    component: SesionesFormComponent,
    data: {
      action: 'view',
    },
  },

  {
    path: 'control',
    component: SesionesControlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionesRoutingModule {}
