import { Component, OnInit } from '@angular/core';
import { ConvenioDTO } from 'app/shared/models/convenio-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-convenios-list',
  templateUrl: './convenios-list.component.html',
  styleUrls: ['./convenios-list.component.scss']
})
export class ConveniosListComponent implements OnInit {
  idAprendizBorrar: string | null | number = null;
  loading: boolean = false;
  convenios: ConvenioDTO[];
  dataSeleccionada: ConvenioDTO;
  path: string = '/admin/aprendiz-ext/form-aprendiz-ext';
  rutaEliminar: string = 'api/v1/convenios/delete/by-id/'; 
  numberRow: number = 5;
  page: number = 1;
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.convenios = [];
  }

  async obtenerData() {
    this.loading = true;
    try {
      this.convenios = await this._peticionesService.getDatos<ConvenioDTO[]>('api/v1/convenios/list/all');
      console.log(this.convenios)
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  actualizarSeleccion(elemento: ConvenioDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
