import { Component, Input, OnInit } from '@angular/core';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {
  @Input() rutaAgregar: string = ''; 
  @Input() idAprendizBorrar: string | null = null;

  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
  }
  // descargarExcel(): void {
  // }
  async borrarData() {
    try {
      if(this.idAprendizBorrar != null){
        this._peticionesService.deleteDatos<any>("api/v1/aprendices-ext", this.idAprendizBorrar);
      }else{
        this._peticionesService.mostrarNotificacion("info", "Informacion", "Debe selecionar un elemento de la lista")
      }
    }catch (error) {
      console.log(error)
    }
  }
}
