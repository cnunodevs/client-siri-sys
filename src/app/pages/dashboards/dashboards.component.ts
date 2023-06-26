import { Component, OnInit } from '@angular/core';
import { ReportesDTO } from 'app/shared/models/reportes-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
  idAprendizBorrar: string | null | number = null;
  reports: ReportesDTO[];
  
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.reports = [];
  }

  async obtenerData() {
    try {
      this.reports = await this._peticionesService.getDatos<ReportesDTO[]>('api/v1/reportes/list/all');
      console.log(this.reports)
    } catch (error) {
      console.log(error);
    }
  }

  actualizarSeleccion(elemento: ReportesDTO) {
    this.idAprendizBorrar = elemento.id;
  }

  ngOnInit(): void {
    this.obtenerData();
  }
}
