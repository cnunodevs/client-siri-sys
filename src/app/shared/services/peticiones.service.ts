import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(
    private _apiService: ApiService,
    private notification: NzNotificationService
  ) { }

  async getDatos<T>(ruta: string): Promise<T> {
    return new Promise<T>((reject, resolve) => {
      this._apiService.getDatos(ruta).subscribe(
        {
          next: (value: T) => {
            this.mostrarNotificacion('success', 'Éxito', 'Datos obtenidos correctamente');
            resolve(value)
          },
          error: (err: any) => {
            this.mostrarNotificacion('error', 'Error', 'Ocurrió un error al obtener los datos');
            reject(err)
          }
        }
      )
    })
  }
  // postDatos<T>(ruta: string, body: T): Promise<T> {
  // }
  // deleteDatos<T>(ruta: string): Promise<T> {
  // }
  // putDatos<T>(ruta: string, body: T): Promise<T> {
  // }
  mostrarNotificacion(type: string, title: string, content: string): void {
    this.notification.create(
      type,
      title,
      content
    );
  }
}
