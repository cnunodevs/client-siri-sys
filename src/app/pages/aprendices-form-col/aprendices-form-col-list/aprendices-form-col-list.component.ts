import { Component, OnInit } from '@angular/core';
import { AprendicesFormadosColDTO } from 'app/shared/models/aprendices-formados-col-dto';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-aprendices-form-col-list',
  templateUrl: './aprendices-form-col-list.component.html',
  styleUrls: ['./aprendices-form-col-list.component.scss']
})
export class AprendicesFormColListComponent implements OnInit , MetodosCRUD {
  idAprendizBorrar: string | null | number = null; 
  aprendices: AprendicesFormadosColDTO[];
  path: string = '/admin/aprendiz-col/form-aprendiz-col';
  dataSeleccionada: AprendicesFormadosColDTO;
  rutaEliminar: string = 'api/v1/aprendices-formados-col/delete/by-id/';
  numberRow: number = 5;
  page: number = 1;
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.aprendices = [];
  }
  actualizarSeleccion(elemento: AprendicesFormadosColDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }
  async obtenerData() {
    try {
      this.aprendices = await this._peticionesService.getDatos<AprendicesFormadosColDTO[]>('api/v1/aprendices-formados-col/list/all');
    } catch (error) {
      console.log(error);
    }
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
