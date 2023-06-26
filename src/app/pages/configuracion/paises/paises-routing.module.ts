import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './paises.component';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisesFormComponent } from './paises-form/paises-form.component';

const routes: Routes = [
  {
    path: '',
    component: PaisesComponent,
    children: [
      {
        path: 'paises-list',
        component: PaisesListComponent,
        data: {
          titulo: "Lista de aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
        
      },
      {
        path: 'paises-form',
        component: PaisesFormComponent,
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
export class PaisesRoutingModule { }
