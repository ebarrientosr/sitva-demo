import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResourceService } from 'src/app/share/service/resource.service';
import { EstadoSesion } from './estado-sesion';

@Injectable({
  providedIn: 'root'
})
export class EstadoSesionService extends ResourceService<EstadoSesion, number>{

  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.api}/estado-sesion`);
  }
}
