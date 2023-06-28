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
  loading: boolean = false;
  Usuarios: UsusarioDTO[];
  dataSeleccionada: UsusarioDTO;
  path: string = '/admin/usuarios/usuarios-form';
  rutaEliminar: string = 'api/v1/usuarios/delete/by-id/'; 
  numberRow: number = 5;
  page: number = 1;
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.Usuarios = [];
  }

  async obtenerData() {
    this.loading = true;
    try {
      this.Usuarios = await this._peticionesService.getDatos<UsusarioDTO[]>('api/v1/usuarios/list/all');
      console.log(this.Usuarios)
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  actualizarSeleccion(elemento: UsusarioDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
