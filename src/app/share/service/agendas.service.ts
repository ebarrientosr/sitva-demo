import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Periodo } from '../model/periodo';

@Injectable({
  providedIn: 'root'
})
export class AgendasService extends ResourceService<Periodo, number>{

  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.api}/agendas`);
  }
}
