import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TipoSesion } from './tipo-sesion';
import { ResourceService } from 'src/app/share/service/resource.service';

@Injectable({
  providedIn: 'root'
})
export class TipoSesionService extends ResourceService<TipoSesion, number>{

  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.api}/tipo-sesion`);
  }
}
