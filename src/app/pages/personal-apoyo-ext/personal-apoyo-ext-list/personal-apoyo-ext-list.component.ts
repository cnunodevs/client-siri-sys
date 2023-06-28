import { Component, OnInit } from '@angular/core';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { PersonalApoyoExteriorDTO } from 'app/shared/models/personal-apoyo-exterior-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-personal-apoyo-ext-list',
  templateUrl: './personal-apoyo-ext-list.component.html',
  styleUrls: ['./personal-apoyo-ext-list.component.scss']
})
export class PersonalApoyoExtListComponent implements OnInit , MetodosCRUD {
  idAprendizBorrar: string | null = null;
  loading: boolean = false;
  personal: PersonalApoyoExteriorDTO[];
  dataSeleccionada: PersonalApoyoExteriorDTO;
  path: string = '/admin/personal-apoyo-ext/form-personal-apoyo-ext';
  rutaEliminar: string = 'api/v1/personal-apoyo-ext/delete/by-id/'; 
  numberRow: number = 5;
  page: number = 1;
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.personal = [];
  }

  actualizarSeleccion(elemento: PersonalApoyoExteriorDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  async obtenerData() {
    this.loading = true;
    try {
      this.personal = await this._peticionesService.getDatos<PersonalApoyoExteriorDTO[]>('api/v1/personal-apoyo-ext/list/all');
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
