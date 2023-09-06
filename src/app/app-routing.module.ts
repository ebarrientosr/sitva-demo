import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './error-pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/procesos',
    pathMatch: 'full',
  },
  {
    path: 'procesos',
    loadChildren: () =>
      import('./modules/procesos/procesos.module').then(
        (m) => m.ProcesosModule
      ),
  },
  {
    path: 'mantenimiento',
    loadChildren: () =>
      import('./modules/mantenimiento/mantenimiento.module').then(
        (m) => m.MantenimientoModule
      ),
  },
  {
    path: 'reportes',
    loadChildren: () =>
      import('./modules/reportes/reportes.module').then(
        (m) => m.ReportesModule
      ),
  },
  {
    path: 'configuraciones',
    loadChildren: () =>
      import('./modules/configuraciones/configuraciones.module').then(
        (m) => m.ConfiguracionesModule
      ),
  },
  { path: '**', pathMatch: 'full', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
