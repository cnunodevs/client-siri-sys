import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesService } from 'app/shared/services/peticiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {
  @Input() rutaAgregar: string = '';
  @Input() idAprendizBorrar: string | null = null;
  @Input() dataSeleccionada: any;
  @Input() dataEdit: string = '';
  @Input() path: string = '';
  @Input() rutaEliminar: string = '';
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
      if (this.idAprendizBorrar != null) {
        await this._peticionesService.deleteDatos(this.rutaEliminar, this.idAprendizBorrar)
      } else {
        this._peticionesService.mostrarNotificacion("info", "Informacion", "Debe selecionar un elemento de la lista")
      }
    } catch (error) {
      console.log(error)
    }
    // this.idAprendizBorrar = null;
  }
  async editarData() {
    localStorage.setItem(this.dataEdit, JSON.stringify(this.dataSeleccionada));
    this.router.navigate([this.path])
  }

  cargarFile() {
    Swal.fire({
      title: 'Cargar por archivo',
      text: "No disponible por el momento, en etapa de desarrollo",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'De, acuerdo'
    })
  }
}
