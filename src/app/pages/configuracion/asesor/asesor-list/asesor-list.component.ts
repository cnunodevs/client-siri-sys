import { Component, OnInit } from '@angular/core';
import { AsesorDTO } from 'app/shared/models/asesor-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-asesor-list',
  templateUrl: './asesor-list.component.html',
  styleUrls: ['./asesor-list.component.scss']
})
export class AsesorListComponent implements OnInit {
  idAprendizBorrar: string | null | number = null;
  asesor: AsesorDTO[];
  dataSeleccionada: AsesorDTO;
  path: string = '/admin/aprendiz-ext/form-aprendiz-ext';
  rutaEliminar: string = 'api/v1/asesores/delete/by-id/'; 
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.asesor = [];
  }

  async obtenerData() {
    try {
      this.asesor = await this._peticionesService.getDatos<AsesorDTO[]>('api/v1/asesores/list/all');
      console.log(this.asesor)
    } catch (error) {
      console.log(error);
    }
  }

  actualizarSeleccion(elemento: AsesorDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
