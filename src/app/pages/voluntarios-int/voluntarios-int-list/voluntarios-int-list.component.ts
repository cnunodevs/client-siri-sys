import { Component, OnInit } from '@angular/core';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { VoluntarioInternacionalesColDTO } from 'app/shared/models/voluntario-internacionales-col-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-voluntarios-int-list',
  templateUrl: './voluntarios-int-list.component.html',
  styleUrls: ['./voluntarios-int-list.component.scss']
})
export class VoluntariosIntListComponent implements OnInit , MetodosCRUD {
  idAprendizBorrar :string | null = null;
  loading: boolean = false;
  voluntarios: VoluntarioInternacionalesColDTO[];
  dataSeleccionada: VoluntarioInternacionalesColDTO;
  path: string = '/admin/voluntarios-int/form-voluntarios-int';
  rutaEliminar: string = 'api/v1/voluntarios-internacionales/delete/by-id/'; 
  ruta: string = 'api/v1/voluntarios-internacionales/upload-file'; 
  numberRow: number = 5;
  page: number = 1;
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.voluntarios = [];
  }

  actualizarSeleccion(elemento: VoluntarioInternacionalesColDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  async obtenerData() {
    this.loading = true;
    try {
      this.voluntarios = await this._peticionesService.getDatos<VoluntarioInternacionalesColDTO[]>('api/v1/voluntarios-internacionales/list/all');
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
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
