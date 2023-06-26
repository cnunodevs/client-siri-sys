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
  personal: PersonalApoyoExteriorDTO[];
  dataSeleccionada: PersonalApoyoExteriorDTO;
  path: string = '/admin/personal-apoyo-ext/form-personal-apoyo-ext';
  rutaEliminar: string = 'api/v1/personal-apoyo-ext/delete/by-id/'; 

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
    try {
      this.personal = await this._peticionesService.getDatos<PersonalApoyoExteriorDTO[]>('api/v1/personal-apoyo-ext/list/all');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
