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
}
