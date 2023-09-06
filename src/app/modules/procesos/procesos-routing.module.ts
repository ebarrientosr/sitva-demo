import { AutorizacionAsistenciaVotacionRemotaComponent } from './autorizacion-asistencia-votacion-remota/autorizacion-asistencia-votacion-remota.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotosOralesComponent } from './votos-orales/votos-orales.component';
import { VisorAsistenciaVotacionComponent } from './visor-asistencia-votacion/visor-asistencia-votacion.component';
import { MesaDirectivaComponent } from './mesa-directiva/mesa-directiva.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sesiones',
    pathMatch: 'full',
  },
  {
    path: 'sesiones',
    loadChildren: () =>
      import('./sesiones/sesiones.module').then((m) => m.SesionesModule),
  },
  {
    path: 'autorizaciones-remotas',
    component: AutorizacionAsistenciaVotacionRemotaComponent,
  },
  {
    path: 'licencias',
    loadChildren: () =>
      import('./licencias/licencias.module').then((m) => m.LicenciasModule),
  },
  {
    path: 'votos-orales',
    component: VotosOralesComponent,
  },
  {
    path: 'visor-asistencia-remota',
    component: VisorAsistenciaVotacionComponent,
  },
  {
    path: 'mesa-directiva',
    component: MesaDirectivaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesosRoutingModule {}
