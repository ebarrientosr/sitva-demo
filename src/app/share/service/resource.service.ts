import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ResourceService<T, U> {
  constructor(private httpClient: HttpClient, protected endpoint: string) {}

  public create(resource: Partial<T>): Observable<T> {
    return this.httpClient.post<T>(`${this.endpoint}`, resource);
  }

  public get(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.endpoint}`);
  }

  public getById(id: U): Observable<T> {
    return this.httpClient.get<T>(`${this.endpoint}/${id}`);
  }
  public update(id: U, resource: Partial<T>): Observable<T> {
    return this.httpClient.put<T>(`${this.endpoint}/${id}`, resource);
  }

  public delete(id: U): Observable<void> {
    return this.httpClient.delete<void>(`${this.endpoint}/${id}`);
  }
}
