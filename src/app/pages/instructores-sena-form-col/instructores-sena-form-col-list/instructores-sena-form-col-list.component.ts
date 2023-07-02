import { Component, OnInit } from '@angular/core';
import { InstructoresFormadosColDTO } from 'app/shared/models/instructores-formados-col-dto';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-instructores-sena-form-col-list',
  templateUrl: './instructores-sena-form-col-list.component.html',
  styleUrls: ['./instructores-sena-form-col-list.component.scss']
})
export class InstructoresSenaFormColListComponent implements OnInit , MetodosCRUD {
  idAprendizBorrar: string | null = null;
  loading: boolean = false;
  instructores: InstructoresFormadosColDTO[];
  dataSeleccionada: InstructoresFormadosColDTO;
  path: string = '/admin/instructores-sena-col/form-instructores-int';
  rutaEliminar: string = 'api/v1/instructores-formados-col/delete/by-id/'; 
  ruta: string = 'api/v1/instructores-formados-col/upload-file'; 
  numberRow: number = 5;
  page: number = 1;
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.instructores = [];
  }

  actualizarSeleccion(elemento: InstructoresFormadosColDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }


  async obtenerData() {
    this.loading = true;
    try {
      this.instructores = await this._peticionesService.getDatos<InstructoresFormadosColDTO[]>('api/v1/instructores-formados-col/list/all');
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
