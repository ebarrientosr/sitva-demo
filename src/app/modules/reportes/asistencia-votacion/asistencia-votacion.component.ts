import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia-votacion',
  templateUrl: './asistencia-votacion.component.html',
  styleUrls: ['./asistencia-votacion.component.css']
})
export class AsistenciaVotacionComponent implements OnInit {
  sesiones: any[] = [];
  temas: any[] = [];
  votaciones: any[] = [];
  fechaInicio: Date = new Date((new Date()).getFullYear(),(new Date()).getMonth(),1);
  fechaFin: Date = new Date();
  visualizarReporte: boolean = false;

  reportServer: string = 'http://172.21.0.45/ReportServer/Pages/ReportViewer.aspx?%2fUntitled&rs:Command=Render';
  reportUrl: string = 'http://172.21.0.45/ReportServer/Pages/ReportViewer.aspx?%2fUntitled&rs:Command=Render';
  showParameters: string = "false";
  parameters: any = {
    /*"ReportParameter1": null,
    "SampleBooleanParameter" : true,
    "SampleDateTimeParameter" : "08/21/2023",
    "SampleIntParameter" : 1,
    "SampleFloatParameter" : "123.1234",
    "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]*/
  };
  language: string = "es-ES";
  width: number = 100;
  height: number = 100;
  toolbar: string = "true";

  cargarReportes(){
    this.visualizarReporte = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
