import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(
    private _apiService: ApiService,
    private notification: NzNotificationService,
    private modal: NzModalService
  ) { }

  async getDatos<T>(ruta: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
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
  postDatos<T>(ruta: string, body: T): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this._apiService.postDatos(ruta, body).subscribe(
        {
          next: (value: T) => {
            this.mostrarNotificacion('success', 'Éxito', 'Datos Enviados correctamente');
            resolve(value)
          },
          error: (err: any) => {
            this.mostrarNotificacion('error', 'Error', 'Ocurrió un error en el envio de los datos');
            reject(err)
          }
        }
      )
    })
  }
  async deleteDatos<T>(ruta: string, id: string): Promise<T> {
    this.modal.confirm({
      nzTitle: 'Estas seguro que deseas eliminar este Registro',
      nzOkText: 'Si',
      nzOnOk: () => {
        new Promise<T>((resolve, reject) => {
          this._apiService.deleteDatos(ruta, id).subscribe(
            {
              next: (value: T) => {
                this.mostrarNotificacion('success', 'Éxito', 'Datos borrado correctamente');
                resolve(value)
              },
              error: (err: any) => {
                this.mostrarNotificacion('error', 'Error', 'Ocurrió un error al borrar los datos');
                reject(err)
              }
            }
          )
        })
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
    return; 
  }
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
