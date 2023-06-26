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
  institucion: InstitucionDTO[];
  dataSeleccionada: InstitucionDTO;
  path: string = '/admin/aprendiz-ext/form-aprendiz-ext';
  rutaEliminar: string = 'api/v1/instituciones/delete/by-id/'; 
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.institucion = [];
  }

  async obtenerData() {
    try {
      this.institucion = await this._peticionesService.getDatos<InstitucionDTO[]>('api/v1/instituciones/list/all');
      console.log(this.institucion)
    } catch (error) {
      console.log(error);
    }
  }

  actualizarSeleccion(elemento: InstitucionDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
