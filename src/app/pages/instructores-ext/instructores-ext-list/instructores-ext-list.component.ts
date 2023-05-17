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

  instructores: InstructoresExtDTO[];

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.instructores = [];
  }

  actualizarSeleccion(elemento: InstructoresExtDTO) {
    console.log("seleccionada: " + elemento);
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
