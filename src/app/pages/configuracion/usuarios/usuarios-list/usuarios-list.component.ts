import { Component, OnInit } from '@angular/core';
import { UsusarioDTO } from 'app/shared/models/usuarios-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {
  idAprendizBorrar: string | null | number = null;
  institucion: UsusarioDTO[];
  dataSeleccionada: UsusarioDTO;
  path: string = '/admin/usuarios/usuarios-form';
  rutaEliminar: string = 'api/v1/usuarios/delete/by-id/'; 
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.institucion = [];
  }

  async obtenerData() {
    try {
      this.institucion = await this._peticionesService.getDatos<UsusarioDTO[]>('api/v1/usuarios/list/all');
      console.log(this.institucion)
    } catch (error) {
      console.log(error);
    }
  }

  actualizarSeleccion(elemento: UsusarioDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}