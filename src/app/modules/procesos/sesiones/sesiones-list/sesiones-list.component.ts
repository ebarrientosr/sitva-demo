import { SesionesService } from './../sesiones.service';
import {
  MessageService,
  ConfirmationService,
  ConfirmEventType,
} from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FilterItem } from '@congreso/ng-admin';
import { Sesion } from '../sesion';
import { Router } from '@angular/router';
import { EstadoSesionService } from 'src/app/modules/mantenimiento/estado-sesion/estado-sesion.service';

@Component({
  selector: 'app-sesiones-list',
  templateUrl: './sesiones-list.component.html',
  styleUrls: ['./sesiones-list.component.scss'],
})
export class SesionesListComponent implements OnInit {
  filters: FilterItem[] = [
    {
      label: 'Periodo',
      value: {
        id: '2021',
        text: '2021-2026',
      },
      pin: true,
    },
    {
      label: 'Tipo de Sesión',
      value: {
        id: 1,
        text: 'Sesión del pleno',
      },
      pin: true,
    },
  ];

  sesiones: Sesion[] = [];

  sesionSelected?: Sesion;

  itemActive?: Sesion;

  menuItems = [
    {
      label: 'Ver',
      icon: 'pi pi-eye ',
      command: (e: any) => {
        this.router.navigate([
          '/procesos/sesiones',
          this.itemActive?.id,
          'ver',
        ]);
      },
    },
    {
      label: 'Editar',
      icon: 'pi pi-pencil ',
      command: (e: any) => {
        this.router.navigate([
          '/procesos/sesiones',
          this.itemActive?.id,
          'editar',
        ]);
      },
    },
    {
      label: 'Eliminar',
      icon: 'pi pi-trash text-red-600',
      command: (e: any) => {
        if (this.itemActive && this.itemActive.id) {
          this.sesionDelete(this.itemActive.id);
        } else {
          this.messageService.add({
            severity: 'warning',
            summary: 'Sesión',
            detail: 'No se encontró la sesión a eliminar',
          });
        }
      },
    },
  ];

  constructor(
    private sesionesService: SesionesService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private estadoSesionService: EstadoSesionService
  ) {}

  ngOnInit() {
    this.sesionLoad();
  }

  sesionLoad() {
    this.sesionesService.get().subscribe((data) => (this.sesiones = data));
  }

  sesionDelete(id: number) {
    this.confirmationService.confirm({
      message: '¿Quieres eliminar este registro?',
      header: 'Confirmación de eliminación',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.sesionesService.delete(id).subscribe({
          next: (data) => {
            this.sesionLoad();

            this.messageService.add({
              severity: 'success',
              summary: 'Sesión',
              detail: 'El registro de elimino correctamente',
            });
          },
          error: (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Sesión',
              detail: 'No se pudo eliminar el registro',
            });
          },
        });
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            break;
          case ConfirmEventType.CANCEL:
            break;
        }
      },
    });
  }

  cambiarEstadoSesion(estadoId: number) {
    this.estadoSesionService.getById(estadoId).subscribe((data) => {
      if (!this.sesionSelected || !this.sesionSelected.id) {
        this.messageService.add({
          severity: 'warning',
          summary: 'Sesión',
          detail: 'No se encontró ninguna sesion seleccionada',
        });

        return;
      }

      this.sesionesService
        .update(this.sesionSelected.id, {
          ...this.sesionSelected,
          estado: data,
        })
        .subscribe((response) => {
          this.sesionSelected = Object.assign({}, this.sesionSelected, {
            estado: data,
          });

          this.sesionLoad();
        });
    });
  }
}
