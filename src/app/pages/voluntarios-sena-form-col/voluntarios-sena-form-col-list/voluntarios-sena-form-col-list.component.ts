import { Component, OnInit } from '@angular/core';
import { MetodosCRUD } from 'app/shared/models/metodos-crud';
import { VoluntarioAprendicesFormadosColDTO } from 'app/shared/models/voluntario-aprendices-formados-col-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-voluntarios-sena-form-col-list',
  templateUrl: './voluntarios-sena-form-col-list.component.html',
  styleUrls: ['./voluntarios-sena-form-col-list.component.scss']
})
export class VoluntariosSenaFormColListComponent implements OnInit , MetodosCRUD {

  voluntarios: VoluntarioAprendicesFormadosColDTO[];

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.voluntarios = [];
  }

  actualizarSeleccion(elemento: VoluntarioAprendicesFormadosColDTO) {
    console.log("seleccionada: " + elemento);
  }

  async obtenerData() {
    try {
      this.voluntarios = await this._peticionesService.getDatos<VoluntarioAprendicesFormadosColDTO[]>('api/v1/voluntarios-aprendices-formados-col/paginate');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
