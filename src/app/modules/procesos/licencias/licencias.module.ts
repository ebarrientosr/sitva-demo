import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenciasListComponent } from './licencias-list/licencias-list.component';
import { LicenciasFormComponent } from './licencias-form/licencias-form.component';
import { LicenciasRoutingModule } from './licencias-routing.module';
import { FilterBarModule } from '@congreso/ng-admin';

@NgModule({
  declarations: [LicenciasListComponent, LicenciasFormComponent],
  imports: [
    CommonModule,
    LicenciasRoutingModule,
    CardModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    FilterBarModule,
    InputTextModule,
    MenuModule,
    DropdownModule
  ],
})
export class LicenciasModule {}
