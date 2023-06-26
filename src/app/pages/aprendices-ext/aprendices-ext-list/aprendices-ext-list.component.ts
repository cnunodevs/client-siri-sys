import { Component, OnInit } from '@angular/core';
import { AprendicesExtDTO } from 'app/shared/models/aprendices-ext-dto';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { PeticionesService } from '../../../shared/services/peticiones.service';

@Component({
  selector: 'app-aprendices-ext-list',
  templateUrl: './aprendices-ext-list.component.html',
  styleUrls: ['./aprendices-ext-list.component.scss']
})
export class AprendicesExtListComponent implements OnInit, MetodosCRUD {
  idAprendizBorrar: string | null = null;
  aprendices: AprendicesExtDTO[];

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.aprendices = [];
  }

  async obtenerData() {
    try {
      this.aprendices = await this._peticionesService.getDatos<AprendicesExtDTO[]>('api/v1/aprendices-ext/list/paginate');
    } catch (error) {
      console.log(error);
    }
  }

  actualizarSeleccion(elemento: AprendicesExtDTO) {
    this.idAprendizBorrar = elemento.id;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
