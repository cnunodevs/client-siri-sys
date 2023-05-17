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

  personal: PersonalApoyoExteriorDTO[];

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.personal = [];
  }

  async obtenerData() {
    try {
      this.personal = await this._peticionesService.getDatos<PersonalApoyoExteriorDTO[]>('api/v1/personal-apoyo-ext/paginate');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
