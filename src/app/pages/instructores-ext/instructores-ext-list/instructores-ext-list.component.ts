import { Component, OnInit } from '@angular/core';
import { InstructoresExtDTO } from 'app/shared/models/instructores-ext-dto';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-instructores-ext-list',
  templateUrl: './instructores-ext-list.component.html',
  styleUrls: ['./instructores-ext-list.component.scss']
})
export class InstructoresExtListComponent implements OnInit , MetodosCRUD {
  idAprendizBorrar: string | null = null;
  loading: boolean = false;
  instructores: InstructoresExtDTO[];
  dataSeleccionada: InstructoresExtDTO;
  path: string = '/admin/expertos-int/form-expertos-int';
  rutaEliminar: string = 'api/v1/expertos-internacionales/delete/by-id/'; 
  ruta: string = 'api/v1/expertos-internacionales/upload-file'; 
  numberRow: number = 5;
  page: number = 1;
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.instructores = [];
  }

  actualizarSeleccion(elemento: InstructoresExtDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }


  async obtenerData() {
    this.loading = true;
    try {
      this.instructores = await this._peticionesService.getDatos<InstructoresExtDTO[]>('api/v1/instructores-ext/list/all');
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
