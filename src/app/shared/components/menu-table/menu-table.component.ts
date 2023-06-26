import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {
  @Input() rutaAgregar: string = ''; 
  @Input() idAprendizBorrar: string | null = null;
  @Input() dataSeleccionada: any;
  constructor(
    private _peticionesService: PeticionesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  // descargarExcel(): void {
  // }
  async borrarData() {
    try {
      if(this.idAprendizBorrar != null){
        await this._peticionesService.deleteDatos("api/v1/aprendices-ext/delete/by-id/", this.idAprendizBorrar)
      }else{
        this._peticionesService.mostrarNotificacion("info", "Informacion", "Debe selecionar un elemento de la lista")
      }
    }catch (error) {
      console.log(error)
    }
    // this.idAprendizBorrar = null;
  }
  async editarData() {
    localStorage.setItem("data", JSON.stringify(this.dataSeleccionada));
    this.router.navigate(['/admin/aprendiz-ext/form-aprendiz-ext'])
  }
}
