import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })
  private RUTA_BASE = environment.url;
  constructor(
    private httpClient: HttpClient
  ) { }

  getDatos<T>(ruta: string, page: number = 9 , size: number = 5): Observable<T> {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.httpClient.get<T>(`${this.RUTA_BASE}/${ruta}`, { headers: this.httpHeaders, params: params });
  }
  postDatos<T>(ruta: string, body: T): Observable<T> {
    return this.httpClient.post<T>(`${this.RUTA_BASE}/${ruta}`, body, { headers: this.httpHeaders });
  }
  deleteDatos<T>(ruta: string, id: string | number): Observable<T> {
    return this.httpClient.delete<T>(`${this.RUTA_BASE}/${ruta}${id}`, { headers: this.httpHeaders });
  }
  putDatos<T>(ruta: string, body: T): Observable<T> {
    return this.httpClient.put<T>(`${this.RUTA_BASE}/${ruta}`, body, { headers: this.httpHeaders });
  }
}
