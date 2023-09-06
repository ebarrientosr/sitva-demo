import { Injectable } from '@angular/core';
import { ResourceService } from 'src/app/share/service/resource.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Licencia } from './licencia';

@Injectable({
  providedIn: 'root',
})
export class LicenciasService extends ResourceService<Licencia, number> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.api}/licencias`);
  }
}
