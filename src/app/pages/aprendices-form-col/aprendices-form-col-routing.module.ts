import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AprendicesFormColEditComponent } from './aprendices-form-col-edit/aprendices-form-col-edit.component';
import { AprendicesFormColComponent } from './aprendices-form-col.component';
import { AprendicesFormColListComponent } from './aprendices-form-col-list/aprendices-form-col-list.component';
import { AprendicesFormColFormComponent } from './aprendices-form-col-form/aprendices-form-col-form.component';

const routes: Routes = [
  {
    path: '',
    component: AprendicesFormColComponent,
    children: [
      {
        path: 'list-aprendiz-col',
        component: AprendicesFormColListComponent,
        data: {
          titulo: "Lista de aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
        
      },
      {
        path: 'edit-aprendiz-col',
        component: AprendicesFormColEditComponent,
        data: {
          titulo: "Editar aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'form-aprendiz-col',
        component: AprendicesFormColFormComponent,
        data: {
          titulo: "Formulario aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: "",
        redirectTo: "list-aprendiz-col",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprendicesFormColRoutingModule { }
