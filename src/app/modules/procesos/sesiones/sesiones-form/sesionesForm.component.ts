import { EstadoSesionService } from './../../../mantenimiento/estado-sesion/estado-sesion.service';
import { SesionesService } from './../sesiones.service';
import { map } from 'rxjs';
import { LegislaturasService } from './../../../../share/service/legislaturas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sesion } from '../sesion';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAllControlsAsDirty } from 'src/app/share/util/form.util';
import { PeriodosService } from 'src/app/share/service/periodos.service';
import { TipoSesionService } from 'src/app/modules/mantenimiento/tipo-sesion/tipo-sesion.service';
import { ModalidadesService } from 'src/app/modules/mantenimiento/modalidades/modalidades.service';
import { HorariosService } from 'src/app/modules/mantenimiento/horarios/horarios.service';
import { AgendasService } from 'src/app/share/service/agendas.service';
import { Periodo } from 'src/app/share/model/periodo';
import { TipoSesion } from 'src/app/modules/mantenimiento/tipo-sesion/tipo-sesion';
import { Modalidad } from 'src/app/modules/mantenimiento/modalidades/modalidad';
import { Horario } from 'src/app/modules/mantenimiento/horarios/horario';
import { Agenda } from 'src/app/share/model/agenda';

@Component({
  selector: 'app-sesionesForm',
  templateUrl: './sesionesForm.component.html',
  styleUrls: ['./sesionesForm.component.css'],
})
export class SesionesFormComponent implements OnInit {
  periodos: Periodo[] = [];
  legislaturas: any[] = [];
  tiposSesiones: TipoSesion[] = [];
  modalidades: Modalidad[] = [];
  horarios: Horario[] = [];
  estados: any[] = [];

  agendas: Agenda[] = [];
  agendasVinculadas: Agenda[] = [];

  vincularAgendaDialogShow: boolean = false;
  // vincularAgendaDialogShow: boolean = true;

  agendaSelected: Agenda[] = [];

  agendaFilter: string = '';

  sesion: Sesion | null = null;

  formGroup: FormGroup = this.formBuilder.group({
    periodoParlamentario: [null, [Validators.required]],
    legislatura: [null, [Validators.required]],
    tipoSesion: [null, [Validators.required]],
    modalidad: [null, [Validators.required]],
    horario: [null, [Validators.required]],
    titulo: [null, [Validators.required]],
    fechaInicio: [null, [Validators.required]],
    esPrueba: [null],
  });

  action: string = 'add';

  get title() {
    let title = '';

    switch (this.action) {
      case 'add':
        title = 'Nueva Sesión';
        break;
      case 'edit':
        title = 'Editar Sesión';
        break;
      case 'view':
        title = 'Detalle Sesión';
        break;
      default:
        title = 'Sesion';
        break;
    }

    return title;
  }

  get agendaFiltered() {
    const agendaVinculadasIds = this.agendasVinculadas.map((i) => i.id);
    const agendasSinVinculados = this.agendas.filter(
      (item) => !agendaVinculadasIds.includes(item.id)
    );

    if (this.agendaFilter.trim() == '') {
      return agendasSinVinculados;
    } else {
      return agendasSinVinculados.filter(
        (item) =>
          item.description?.includes(this.agendaFilter) ||
          item.date?.includes(this.agendaFilter)
      );
    }
  }

  constructor(
    private legislaturasService: LegislaturasService,
    private periodosService: PeriodosService,
    private tipoSesionService: TipoSesionService,
    private modalidadesService: ModalidadesService,
    private horariosService: HorariosService,
    private agendasService: AgendasService,
    private activatedRoute: ActivatedRoute,
    private sesionesService: SesionesService,
    private estadoSesionService: EstadoSesionService,
    private messageService: MessageService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log('activatedRoute', params['id']);
      if (params['id']) {
        this.sesionLoad(params['id']);
      } else {
        this.sesion = null;
      }
    });

    this.activatedRoute.data.subscribe((data) => {
      this.action = data['action'];

      if(this.action == 'view'){
        this.formGroup.disable();
      }
    });
  }

  ngOnInit() {
    this.periodoLoad();
    this.legislaturaLoad();
    this.tipoSesionLoad();
    this.modalidadLoad();
    this.horarioLoad();
    this.agendaLoad();
    this.estadoSesionLoad();
  }

  estadoSesionLoad() {
    this.estadoSesionService
      .get()
      .subscribe((result) => (this.estados = result));
  }

  legislaturaLoad() {
    this.legislaturasService
      .get()
      .pipe(
        map((response) => {
          return response.map((item) => {
            return {
              id: item.legislaturaId,
              description: item.desLegis,
            };
          });
        })
      )
      .subscribe((result) => {
        this.legislaturas = result;
      });
  }

  periodoLoad() {
    this.periodosService.get().subscribe((result) => (this.periodos = result));
  }

  tipoSesionLoad() {
    this.tipoSesionService
      .get()
      .subscribe((result) => (this.tiposSesiones = result));
  }

  modalidadLoad() {
    this.modalidadesService
      .get()
      .subscribe((result) => (this.modalidades = result));
  }

  horarioLoad() {
    this.horariosService.get().subscribe((result) => (this.horarios = result));
  }

  vincularAgenda() {
    this.vincularAgendaDialogShow = true;
  }

  agendaLoad() {
    this.agendasService.get().subscribe({
      next: (data) => {
        this.agendas = data;
      },
    });
  }

  sesionLoad(id: number) {
    this.sesionesService.getById(id).subscribe({
      next: (data) => {
        console.log('sesionLoad', data);
        this.sesion = data;
        this.formGroup.patchValue({
          ...this.sesion,
          fechaInicio: this.sesion.fechaInicio
            ? new Date(this.sesion.fechaInicio)
            : null,
        });

        this.agendasVinculadas = [...this.sesion.agendasVinculadas];
      },
      error: (error: HttpErrorResponse) => {
        if (error.status == 404) {
          this.messageService.add({
            severity: 'error',
            summary: 'Sesión',
            detail: 'No se encontró el registro',
          });
          this.router.navigate(['/procesos/sesiones']);
        }
      },
    });
  }

  save() {
    if (this.formGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Sesión',
        detail: 'Verifique los datos ingresados en el formulario',
      });
      markAllControlsAsDirty(Object.values(this.formGroup.controls));
      return;
    }

    let data = this.formGroup.value;

    data = {
      ...data,
      estado: this.estados.at(0),
      agendasVinculadas: [...this.agendasVinculadas],
    };

    if (this.sesion) {
      if (!this.sesion.id) {
        this.messageService.add({
          severity: 'error',
          summary: 'Sesión',
          detail: 'No se puede identificar la sesion',
        });
        return;
      }

      this.sesionesService.update(this.sesion.id, data).subscribe({
        next: (response) => {
          this.sesion = { ...data, id: this.sesion?.id };

          this.messageService.add({
            severity: 'success',
            summary: 'Sesión',
            detail: 'El registro de guardo correctamente',
          });
        },
        error: (error: HttpErrorResponse) => {
          switch (error.status) {
            case 400:
              this.messageService.add({
                severity: 'error',
                summary: 'Sesión',
                detail: 'Verifique los datos ingresados en el formulario',
              });

              break;
            case 404:
              this.messageService.add({
                severity: 'error',
                summary: 'Sesión',
                detail: 'No se encontró el registro',
              });

              break;
            default:
              this.messageService.add({
                severity: 'error',
                summary: 'Sesión',
                detail: 'Ocurrió un error inesperado.',
              });
              break;
          }
        },
      });
    } else {
      this.sesionesService.create(data).subscribe({
        next: (response) => {
          this.router.navigate(['/procesos/sesiones']);

          this.messageService.add({
            severity: 'success',
            summary: 'Sesión',
            detail: 'El registro de guardo correctamente',
          });
        },
        error: (error: HttpErrorResponse) => {
          switch (error.status) {
            case 400:
              this.messageService.add({
                severity: 'error',
                summary: 'Sesión',
                detail: 'Verifique los datos ingresados en el formulario',
              });

              break;
            case 404:
              this.messageService.add({
                severity: 'error',
                summary: 'Sesión',
                detail: 'No se encontró el registro',
              });

              break;
            default:
              this.messageService.add({
                severity: 'error',
                summary: 'Sesión',
                detail: 'Ocurrió un error inesperado.',
              });
              break;
          }
        },
      });
    }
  }

  filtrarAgenda(e: any) {
    e.target.value;
    console.log('filtrarAgenda', e.target.value);
  }

  noop(e: any) {
    e.stopPropagation();
  }

  vincularAgendaGridDblclickHandler(e: any, row: Agenda) {
    e.stopPropagation();

    if (this.agendaSelected.length > 0) {
      return;
    }

    this.agendaSelected = [row];

    this.vincularAgendaDialogShow = false;
  }

  vincularAgendaDialogShowHandler(e: any) {
    this.agendaSelected = [];
  }

  vincularAgendaDialogHideHandler(e: any) {
    this.agendasVinculadas = [
      ...this.agendasVinculadas,
      ...this.agendaSelected,
    ];

    this.agendaSelected = [];
  }

  agendaVinculadaGridDeleteButtonClickHandler(e: any, row: Agenda) {
    this.agendasVinculadas = this.agendasVinculadas.filter(
      (item) => item.id != row.id
    );
  }

  cancel() {
    this.router.navigate(['/procesos/sesiones']);
  }
}
