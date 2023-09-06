import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from './reportes.component';
import { ReportesRoutingModule } from './reportes-routing.module';
import {AsistenciaVotacionComponent} from "./asistencia-votacion/asistencia-votacion.component";
import {ReportViewerModule} from "ngx-ssrs-reportviewer-v2";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";
import {FieldsetModule} from "primeng/fieldset";
import {VotacionesParlamentarioComponent} from "./votaciones-parlamentario/votaciones-parlamentario.component";

@NgModule({
  imports: [
    ReportViewerModule,
    CommonModule,
    ReportesRoutingModule,
    CalendarModule,
    DropdownModule,
    InputSwitchModule,
    InputTextModule,
    PaginatorModule,
    ReactiveFormsModule,
    TabViewModule,
    FieldsetModule,
  ],
  declarations: [ReportesComponent,AsistenciaVotacionComponent, VotacionesParlamentarioComponent]
})
export class ReportesModule { }
