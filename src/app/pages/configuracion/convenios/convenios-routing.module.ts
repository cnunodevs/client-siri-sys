import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConveniosComponent } from './convenios.component';
import { ConveniosListComponent } from './convenios-list/convenios-list.component';
import { ConveniosFormComponent } from './convenios-form/convenios-form.component';

const routes: Routes = [
  {
    path: '',
    component: ConveniosComponent,
    children: [
      {
        path: 'convenios-list',
        component: ConveniosListComponent,
        data: {
          titulo: "Lista de aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
        
      },
      {
        path: 'convenios-form',
        component: ConveniosFormComponent,
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
export class ConveniosRoutingModule { }
