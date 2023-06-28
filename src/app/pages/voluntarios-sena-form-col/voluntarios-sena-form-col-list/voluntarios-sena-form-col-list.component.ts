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
  idAprendizBorrar :string | null | number = null;
  loading: boolean = false;
  voluntarios: VoluntarioAprendicesFormadosColDTO[];
  dataSeleccionada: VoluntarioAprendicesFormadosColDTO;
  path: string = '/admin/voluntarios-form-col/form-voluntarios-sena-form';
  rutaEliminar: string = 'api/v1/voluntarios-aprendices-formados-col/delete/by-id/'; 
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.voluntarios = [];
  }

  actualizarSeleccion(elemento: VoluntarioAprendicesFormadosColDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }


  async obtenerData() {
    this.loading = true;
    try {
      this.voluntarios = await this._peticionesService.getDatos<VoluntarioAprendicesFormadosColDTO[]>('api/v1/voluntarios-aprendices-formados-col/list/all');
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
