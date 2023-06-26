import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitucionesComponent } from './instituciones.component';
import { InstitucionesListComponent } from './instituciones-list/instituciones-list.component';
import { InstitucionesFormComponent } from './instituciones-form/instituciones-form.component';

const routes: Routes = [
  {
    path: '',
    component: InstitucionesComponent,
    children: [
      {
        path: 'instituciones-list',
        component: InstitucionesListComponent,
        data: {
          titulo: "Lista de aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
        
      },
      {
        path: 'instituciones-form',
        component: InstitucionesFormComponent,
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
export class InstitucionesRoutingModule { }
