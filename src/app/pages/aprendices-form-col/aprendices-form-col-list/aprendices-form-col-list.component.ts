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

  aprendices: AprendicesFormadosColDTO[];

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.aprendices = [];
  }

  async obtenerData() {
    try {
      this.aprendices = await this._peticionesService.getDatos<AprendicesFormadosColDTO[]>('api/v1/aprendices-formados-col/paginate');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
