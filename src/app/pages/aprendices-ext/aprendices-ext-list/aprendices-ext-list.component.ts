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

  aprendices: AprendicesExtDTO[];

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.aprendices = [];
  }

  async obtenerData() {
    try {
      this.aprendices = await this._peticionesService.getDatos<AprendicesExtDTO[]>('api/v1/aprendices-ext/paginate');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
