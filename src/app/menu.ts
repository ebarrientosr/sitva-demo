import { MenuItem } from 'primeng/api';

export const MENU: MenuItem[] = [
  {
    label: 'Procesos',
    icon: 'pi pi-fw pi-box',
    items: [
      {
        label: 'Sesiones',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/procesos/sesiones'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Autorización para Asistencia y Votación remota',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/procesos/autorizaciones-remotas'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Licencias',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/procesos/licencias'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Votos Orales',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/procesos/votos-orales'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Visor de Asistencia y Votación',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/procesos/visor-asistencia-remota'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Elección de Mesa Directiva',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/procesos/mesa-directiva'],
        routerLinkActiveOptions: { exact: true },
      },
    ],
  },
  {
    label: 'Mantenimiento',
    icon: 'pi pi-fw pi-box',
    items: [
      {
        label: 'Funcionarios Externos',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/mantenimiento/parlamentario'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Congresistas',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/mantenimiento/parlamentario'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Estado de Congresista',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/mantenimiento/estado-parlamentario'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Tipo de Congresista',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/mantenimiento/tipo-parlamentario'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Tipo de Sesión',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/mantenimiento/tipo-sesion'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Estado de Sesión',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/mantenimiento/estado-sesion'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Quorum',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/mantenimiento/quorum'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Modalidades',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/mantenimiento/modalidad'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Horarios',
        icon: 'pi pi-fw pi-th-large',
        routerLink: ['/mantenimiento/horario'],
        routerLinkActiveOptions: { exact: true },
      },
    ],
  },
  {
    label: 'Reportes',
    icon: 'pi pi-fw pi-book',
    items: [
      {
        label: 'Asistencia y Votación',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/reportes/asistencia-votacion'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Votaciones del parlamentario',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/reportes/votaciones-parlamentario'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Votaciones por sesión',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/reportes/votaciones-sesion'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Autorizaciones de Asistencia y Votación Remota',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/reportes/autorizacion-asistencia-votacion-remota'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Asistencias para Planilla',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/reportes/asistencia-planilla'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Auditoria',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/reportes/auditoria'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Consulta tiempo de oradores',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/reportes/oradores'],
        routerLinkActiveOptions: { exact: true },
      },
    ],
  },
  {
    label: 'Configuraciones',
    icon: 'pi pi-fw pi-cog',
    items: [
      {
        label: 'Aplicativo Móvil',
        icon: 'pi pi-fw pi-mobile',
        routerLink: ['/configuraciones/aplicacion-movil'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Videowall',
        icon: 'pi pi-fw pi-desktop',
        routerLink: ['/configuraciones/videowall'],
        routerLinkActiveOptions: { exact: true },
      },
    ],
  },
];
