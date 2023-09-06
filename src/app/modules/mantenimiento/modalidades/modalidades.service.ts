import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Modalidad } from './modalidad';
import { ResourceService } from 'src/app/share/service/resource.service';

@Injectable({
  providedIn: 'root'
})
export class ModalidadesService extends ResourceService<Modalidad, number>{

  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.api}/modalidades`);
  }
}
