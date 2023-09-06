import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Horario } from './horario';
import { ResourceService } from 'src/app/share/service/resource.service';

@Injectable({
  providedIn: 'root'
})
export class HorariosService extends ResourceService<Horario, number>{

  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.api}/horarios`);
  }
}
