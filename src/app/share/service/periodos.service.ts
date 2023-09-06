import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Legislatura } from '../model/legislatura';
import { Periodo } from '../model/periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodosService extends ResourceService<Periodo, number>{

  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.api}/periodos`);
  }
}
