import { Component, OnInit } from '@angular/core';
import { MENU } from './menu';
import { PrimeNGConfig } from 'primeng/api';
import { ES } from './share/locale/prime-es.locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Gestión SITVA';

  menu = MENU;

  constructor(private config: PrimeNGConfig) {}

  ngOnInit() {
    this.config.setTranslation(ES);
  }
}
