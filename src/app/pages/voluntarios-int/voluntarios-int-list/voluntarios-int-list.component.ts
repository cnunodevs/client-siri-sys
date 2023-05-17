import { Component, OnInit } from '@angular/core';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { VoluntarioInternacionalesColDTO } from 'app/shared/models/voluntario-internacionales-col-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-voluntarios-int-list',
  templateUrl: './voluntarios-int-list.component.html',
  styleUrls: ['./voluntarios-int-list.component.scss']
})
export class VoluntariosIntListComponent implements OnInit , MetodosCRUD {

  voluntarios: VoluntarioInternacionalesColDTO[];

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.voluntarios = [];
  }

  async obtenerData() {
    try {
      this.voluntarios = await this._peticionesService.getDatos<VoluntarioInternacionalesColDTO[]>('api/v1/voluntarios-internacionales/paginate');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
