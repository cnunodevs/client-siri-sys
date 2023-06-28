import { Component, OnInit } from '@angular/core';
import { ReportesDTO } from 'app/shared/models/reportes-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-reportes-list',
  templateUrl: './reportes-list.component.html',
  styleUrls: ['./reportes-list.component.scss']
})
export class ReportesListComponent implements OnInit {
  idAprendizBorrar: string | null | number = null;
  loading: boolean = false;
  reportes: ReportesDTO[];
  dataSeleccionada: ReportesDTO;
  path: string = '/admin/reportes/reportes-form';
  rutaEliminar: string = 'api/v1/reportes/delete/by-id/'; 
  numberRow: number = 5;
  page: number = 1;
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.reportes = [];
  }

  async obtenerData() {
    this.loading = true;
    try {
      this.reportes = await this._peticionesService.getDatos<ReportesDTO[]>('api/v1/reportes/list/all');
      console.log(this.reportes)
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  actualizarSeleccion(elemento: ReportesDTO) {
    this.idAprendizBorrar = elemento.id;
    this.dataSeleccionada = elemento;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
