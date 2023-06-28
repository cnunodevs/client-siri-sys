import { Component, OnInit } from '@angular/core';
import { InstitucionDTO } from 'app/shared/models/institucion-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-instituciones-list',
  templateUrl: './instituciones-list.component.html',
  styleUrls: ['./instituciones-list.component.scss']
})
export class InstitucionesListComponent implements OnInit {
  idAprendizBorrar: string | null | number = null;
  loading: boolean = false;
  institucion: InstitucionDTO[];
  dataSeleccionada: InstitucionDTO;
  path: string = '/admin/aprendiz-ext/form-aprendiz-ext';
  rutaEliminar: string = 'api/v1/instituciones/delete/by-id/'; 
  numberRow: number = 5;
  page: number = 1;
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.institucion = [];
  }

  async obtenerData() {
    this.loading = true;
    try {
      this.institucion = await this._peticionesService.getDatos<InstitucionDTO[]>('api/v1/instituciones/list/all');
      console.log(this.institucion)
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  actualizarSeleccion(elemento: InstitucionDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
