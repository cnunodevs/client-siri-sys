import { Component, OnInit } from '@angular/core';
import { ExpertosInternacionalesDTO } from 'app/shared/models/expertos-internacionales-dto';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-expertos-int-list',
  templateUrl: './expertos-int-list.component.html',
  styleUrls: ['./expertos-int-list.component.scss']
})
export class ExpertosIntListComponent implements OnInit , MetodosCRUD {
  idAprendizBorrar: string | null = null;
  expertos: ExpertosInternacionalesDTO[];
  dataSeleccionada: ExpertosInternacionalesDTO;
  path: string = '/admin/expertos-int/form-expertos-int';
  rutaEliminar: string = 'api/v1/form-expertos-int'; 

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.expertos = [];
  }

  actualizarSeleccion(elemento: ExpertosInternacionalesDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  async obtenerData() {
    try {
      this.expertos = await this._peticionesService.getDatos<ExpertosInternacionalesDTO[]>('api/v1/expertos-internacionales/list/all');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
