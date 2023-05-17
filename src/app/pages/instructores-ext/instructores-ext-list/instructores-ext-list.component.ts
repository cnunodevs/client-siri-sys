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
  instructores: InstructoresExtDTO[];

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.instructores = [];
  }

  actualizarSeleccion(elemento: InstructoresExtDTO) {
    this.idAprendizBorrar = elemento.id;
  }

  async obtenerData() {
    try {
      this.instructores = await this._peticionesService.getDatos<InstructoresExtDTO[]>('api/v1/instructores-ext/paginate');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
