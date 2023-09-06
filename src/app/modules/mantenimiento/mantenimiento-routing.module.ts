import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParlamentarioComponent } from './parlamentario/parlamentario.component';
import { EstadoParlamentarioComponent } from './estado-parlamentario/estado-parlamentario.component';
import { TipoParlamentarioComponent } from './tipo-parlamentario/tipo-parlamentario.component';
import { TipoSesionComponent } from './tipo-sesion/tipo-sesion.component';
import { EstadoSesionComponent } from './estado-sesion/estado-sesion.component';
import { QuorumComponent } from './quorum/quorum.component';
import { ModalidadesComponent } from './modalidades/modalidades.component';
import { HorariosComponent } from './horarios/horarios.component';

const routes: Routes = [
  {
    path: 'parlamentario',
    component: ParlamentarioComponent,
  },
  {
    path: 'estado-parlamentario',
    component: EstadoParlamentarioComponent,
  },
  {
    path: 'tipo-parlamentario',
    component: TipoParlamentarioComponent,
  },
  {
    path: 'tipo-sesion',
    component: TipoSesionComponent,
  },
  {
    path: 'estado-sesion',
    component: EstadoSesionComponent,
  },
  {
    path: 'quorum',
    component: QuorumComponent,
  },
  {
    path: 'modalidad',
    component: ModalidadesComponent,
  },
  {
    path: 'horario',
    component: HorariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoRoutingModule {}
