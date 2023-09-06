import { Injectable } from '@angular/core';
import { ResourceService } from 'src/app/share/service/resource.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sesion } from './sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionesService extends ResourceService<Sesion, number>{

    constructor(httpClient: HttpClient) {
      super(httpClient, `${environment.api}/sesiones`);
    }
}
