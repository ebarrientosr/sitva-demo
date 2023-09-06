import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaVotacionComponent } from './asistencia-votacion/asistencia-votacion.component';
import { VotacionesParlamentarioComponent } from './votaciones-parlamentario/votaciones-parlamentario.component';
import { VotacionesSesionComponent } from './votaciones-sesion/votaciones-sesion.component';
import { AutorizacionAsistenciaVotacionRemotaComponent } from './autorizacion-asistencia-votacion-remota/autorizacion-asistencia-votacion-remota.component';
import { AsistenciaPlanillaComponent } from './asistencia-planilla/asistencia-planilla.component';
import { AuditoriaComponent } from './auditoria/auditoria.component';
import { OradoresComponent } from './oradores/oradores.component';

const routes: Routes = [
  {
    path: 'asistencia-votacion',
    component: AsistenciaVotacionComponent,
  },
  {
    path: 'votaciones-parlamentario',
    component: VotacionesParlamentarioComponent,
  },
  {
    path: 'votaciones-sesion',
    component: VotacionesSesionComponent,
  },
  {
    path: 'autorizacion-asistencia-votacion-remota',
    component: AutorizacionAsistenciaVotacionRemotaComponent,
  },
  {
    path: 'asistencia-planilla',
    component: AsistenciaPlanillaComponent,
  },
  {
    path: 'auditoria',
    component: AuditoriaComponent,
  },
  {
    path: 'oradores',
    component: OradoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesRoutingModule {}
