import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesiones-control',
  templateUrl: './sesiones-control.component.html',
  styleUrls: ['./sesiones-control.component.scss'],
})
export class SesionesControlComponent implements OnInit {
  temas: any[] = [];

  // nuevoTemaDialogVisible = false;
  nuevoTemaDialogVisible = true;

  ngOnInit(): void {
    this.temas = [
      {
        id: 1,
        orden: 1,
        descripcion: 'tema 01',
        estado: 'debate',
      },
    ];
  }
}
