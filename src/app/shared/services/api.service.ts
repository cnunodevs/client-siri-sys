import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { InstitucionDTO } from '../models/institucion-dto';
import { ConvenioDTO } from '../models/convenio-dto';
import { PaisDTO } from '../models/pais-dto';
import { AsesorDTO } from '../models/asesor-dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })
  private RUTA_BASE = environment.url;

  instituciones: BehaviorSubject<InstitucionDTO[]> = new BehaviorSubject([]);
  instituciones$ = this.instituciones.asObservable();
  convenios: BehaviorSubject<ConvenioDTO[]> = new BehaviorSubject([]);
  convenios$ = this.convenios.asObservable();
  pais: BehaviorSubject<PaisDTO[]> = new BehaviorSubject([]);
  pais$ = this.pais.asObservable();
  asesor: BehaviorSubject<AsesorDTO[]> = new BehaviorSubject([]);
  asesor$ = this.asesor.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  getDatos<T>(ruta: string, page: number = 9 , size: number = 5): Observable<T> {
    // const params = new HttpParams().set("page", page).set("size", size);
    return this.httpClient.get<T>(`${this.RUTA_BASE}/${ruta}`, { headers: this.httpHeaders });
  }
  postDatos<T>(ruta: string, body: T): Observable<T> {
    return this.httpClient.post<T>(`${this.RUTA_BASE}/${ruta}`, body, { headers: this.httpHeaders });
  }

  postDatosFile<T>(ruta: string, file: File): Observable<T> {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<T>(`${this.RUTA_BASE}/${ruta}`, formData);
  }
  deleteDatos<T>(ruta: string, id: string | number): Observable<T> {
    return this.httpClient.delete<T>(`${this.RUTA_BASE}/${ruta}${id}`, { headers: this.httpHeaders });
  }
  putDatos<T>(ruta: string, body: T): Observable<T> {
    return this.httpClient.put<T>(`${this.RUTA_BASE}/${ruta}`, body, { headers: this.httpHeaders });
  }
}
