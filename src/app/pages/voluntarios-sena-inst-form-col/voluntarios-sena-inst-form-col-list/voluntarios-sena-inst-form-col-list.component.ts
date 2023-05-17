import { Component, OnInit } from '@angular/core';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { VoluntarioInstructoresFormadosColDTO } from 'app/shared/models/voluntario-instructores-formados-col-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-voluntarios-sena-inst-form-col-list',
  templateUrl: './voluntarios-sena-inst-form-col-list.component.html',
  styleUrls: ['./voluntarios-sena-inst-form-col-list.component.scss']
})
export class VoluntariosSenaInstFormColListComponent implements OnInit , MetodosCRUD {
  idAprendizBorrar: string | null = null;
  voluntarios: VoluntarioInstructoresFormadosColDTO[];

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.voluntarios = [];
  }
  actualizarSeleccion(elemento: VoluntarioInstructoresFormadosColDTO) {
    this.idAprendizBorrar = elemento.id;
  }
  async obtenerData() {
    try {
      this.voluntarios = await this._peticionesService.getDatos<VoluntarioInstructoresFormadosColDTO[]>('api/v1/voluntarios-instructores-formados-col/paginate');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
