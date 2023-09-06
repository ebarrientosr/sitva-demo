import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SesionesRoutingModule } from './sesiones-routing.module';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FilterBarModule } from '@congreso/ng-admin';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { SesionesListComponent } from './sesiones-list/sesiones-list.component';
import { SesionesFormComponent } from './sesiones-form/sesionesForm.component';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogModule } from 'primeng/dialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SesionesControlComponent } from './sesiones-control/sesiones-control.component';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    CommonModule,
    SesionesRoutingModule,
    TableModule,
    PanelModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    FilterBarModule,
    BadgeModule,
    InputTextModule,
    MenuModule,
    FieldsetModule,
    DropdownModule,
    CalendarModule,
    InputSwitchModule,
    DialogModule,
    ContextMenuModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    CheckboxModule
  ],
  declarations: [SesionesListComponent, SesionesFormComponent, SesionesControlComponent],
})
export class SesionesModule {}
