import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenciasListComponent } from './licencias-list/licencias-list.component';
import { LicenciasFormComponent } from './licencias-form/licencias-form.component';

const routes: Routes = [
  {
    path: '',
    component: LicenciasListComponent,
  },
  {
    path: 'agregar',
    component: LicenciasFormComponent,
    data: {
      action: 'add',
    },
  },
  {
    path: ':id/editar',
    component: LicenciasFormComponent,
    data: {
      action: 'edit',
    },
  },
  {
    path: ':id/ver',
    component: LicenciasFormComponent,
    data: {
      action: 'view',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenciasRoutingModule {}
