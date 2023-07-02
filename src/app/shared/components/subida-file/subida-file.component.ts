import { Component, Input, OnInit } from '@angular/core';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-subida-file',
  templateUrl: './subida-file.component.html',
  styleUrls: ['./subida-file.component.scss']
})
export class SubidaFileComponent implements OnInit {
  @Input() ruta: string = '';
  cargando: string = 'Subiendo archivo';
  csvFile!: File;
  enviando: boolean = false;

  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.csvFile = event.target.files[0];
  }

  async subirFile() {
    if (this.csvFile) {
      this.enviando = true;
      try {
        await this._peticionesService.postDatosFile<any>(this.ruta, this.csvFile);
        this.csvFile = null;
      } catch (error) {
        console.log(error);
      }
    }else {
      this._peticionesService.mostrarNotificacion("warning", "Archivo", "Debe seleccionar un archivo para cargar")
    }
    this.enviando = false;
  }


}
