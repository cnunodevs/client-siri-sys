import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorComponent } from './asesor.component';
import { AsesorListComponent } from './asesor-list/asesor-list.component';
import { AsesorFormComponent } from './asesor-form/asesor-form.component';

const routes: Routes = [
  {
    path: '',
    component: AsesorComponent,
    children: [
      {
        path: 'asesor-list',
        component: AsesorListComponent,
        data: {
          titulo: "Lista de aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
        
      },
      {
        path: 'asesor-form',
        component: AsesorFormComponent,
        data: {
          titulo: "Editar aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
