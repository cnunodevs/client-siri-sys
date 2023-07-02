import { Component, OnInit } from '@angular/core';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { VoluntarioInstructoresFormadosColDTO } from 'app/shared/models/voluntario-instructores-formados-col-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-voluntarios-sena-inst-form-col-list',
  templateUrl: './voluntarios-sena-inst-form-col-list.component.html',
  styleUrls: ['./voluntarios-sena-inst-form-col-list.component.scss']
})
export class VoluntariosSenaInstFormColListComponent implements OnInit, MetodosCRUD {
  idAprendizBorrar: string | null = null;
  loading: boolean = false;
  voluntarios: VoluntarioInstructoresFormadosColDTO[];
  dataSeleccionada: VoluntarioInstructoresFormadosColDTO;
  path: string = '/admin/voluntarios-form-inst-col/form-voluntarios-sena-inst-form';
  rutaEliminar: string = 'api/v1/voluntarios-instructores-formados-col/delete/by-id/';
  ruta: string = 'api/v1/voluntarios-instructores-formados-col/upload-file'; 

  numberRow: number = 5;
  page: number = 1;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.voluntarios = [];
  }

  actualizarSeleccion(elemento: VoluntarioInstructoresFormadosColDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  async obtenerData() {
    this.loading = true;
    try {
      this.voluntarios = await this._peticionesService.getDatos<VoluntarioInstructoresFormadosColDTO[]>('api/v1/voluntarios-instructores-formados-col/list/all');
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
