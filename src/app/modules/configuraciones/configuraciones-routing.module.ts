import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideowallComponent } from './videowall/videowall.component';
import { AplicacionMovileComponent } from './aplicacion-movile/aplicacion-movile.component';

const routes: Routes = [
  {
    path: 'aplicacion-movil',
    component: AplicacionMovileComponent,
  },
  {
    path: 'videowall',
    component: VideowallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionesRoutingModule { }
