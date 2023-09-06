import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Legislatura } from '../model/legislatura';

@Injectable({
  providedIn: 'root'
})
export class LegislaturasService extends ResourceService<Legislatura, number>{

  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.api}/legislaturas`);
  }
}
