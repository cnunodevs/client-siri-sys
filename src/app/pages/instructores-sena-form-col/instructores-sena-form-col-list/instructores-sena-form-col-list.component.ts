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

  instructores: InstructoresFormadosColDTO[];

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.instructores = [];
  }

  async obtenerData() {
    try {
      this.instructores = await this._peticionesService.getDatos<InstructoresFormadosColDTO[]>('api/v1/instructores-formados-col/paginate');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
