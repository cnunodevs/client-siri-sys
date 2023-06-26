import { Component, OnInit } from '@angular/core';
import { AprendicesExtDTO } from 'app/shared/models/aprendices-ext-dto';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { PeticionesService } from '../../../shared/services/peticiones.service';

@Component({
  selector: 'app-aprendices-ext-list',
  templateUrl: './aprendices-ext-list.component.html',
  styleUrls: ['./aprendices-ext-list.component.scss']
})
export class AprendicesExtListComponent implements OnInit, MetodosCRUD {
  idAprendizBorrar: string | null | number = null;
  aprendices: AprendicesExtDTO[];
  dataSeleccionada: AprendicesExtDTO;
  path: string = '/admin/aprendiz-ext/form-aprendiz-ext';
  rutaEliminar: string = 'api/v1/aprendices-ext/delete/by-id/'; 
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.aprendices = [];
  }

  async obtenerData() {
    try {
      this.aprendices = await this._peticionesService.getDatos<AprendicesExtDTO[]>('api/v1/aprendices-ext/list/all');
      console.log(this.aprendices)
    } catch (error) {
      console.log(error);
    }
  }

  actualizarSeleccion(elemento: AprendicesExtDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
