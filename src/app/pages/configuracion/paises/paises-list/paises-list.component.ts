import { Component, OnInit } from '@angular/core';
import { PaisDTO } from 'app/shared/models/pais-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.scss']
})
export class PaisesListComponent implements OnInit {
  idAprendizBorrar: string | null | number = null;
  loading: boolean = false;
  pais: PaisDTO[];
  dataSeleccionada: PaisDTO;
  path: string = '/admin/aprendiz-ext/form-aprendiz-ext';
  rutaEliminar: string = 'api/v1/paises/delete/by-id/';
  numberRow: number = 5;
  page: number = 1;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.pais = [];
  }

  async obtenerData() {
    this.loading = true;
    try {
      this.pais = await this._peticionesService.getDatos<PaisDTO[]>('api/v1/paises/list/all');
      console.log(this.pais)
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  actualizarSeleccion(elemento: PaisDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
  // Paginador
  onChangeRowPerPage(event: number): void {
    this.numberRow = event;
    this.page = 1;
  }
  onChangePage(event: number): void {
    this.page = event;
  }
}
