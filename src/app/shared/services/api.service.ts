import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })
  private RUTA_BASE = 'http://localhost:4200';
  constructor(
    private httpClient: HttpClient
  ) { }

  getDatos<T>(ruta: string): Observable<T> {
    return this.httpClient.get<T>(`${this.RUTA_BASE}/${ruta}`, { headers: this.httpHeaders });
  }
  postDatos<T>(ruta: string, body: T): Observable<T> {
    return this.httpClient.post<T>(`${this.RUTA_BASE}/${ruta}`, body, { headers: this.httpHeaders });
  }
  deleteDatos<T>(ruta: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.RUTA_BASE}/${ruta}`, { headers: this.httpHeaders });
  }
  putDatos<T>(ruta: string, body: T): Observable<T> {
    return this.httpClient.put<T>(`${this.RUTA_BASE}/${ruta}`, body, { headers: this.httpHeaders });
  }
}