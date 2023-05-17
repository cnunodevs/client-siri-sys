import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstructoresSenaFormColListComponent } from './instructores-sena-form-col-list/instructores-sena-form-col-list.component';
import { InstructoresSenaFormColFormComponent } from './instructores-sena-form-col-form/instructores-sena-form-col-form.component';
import { InstructoresSenaFormColEditComponent } from './instructores-sena-form-col-edit/instructores-sena-form-col-edit.component';
import { InstructoresSenaFormColComponent } from './instructores-sena-form-col.component';

const routes: Routes = [
  {
    path: '',
    component: InstructoresSenaFormColComponent,
    children: [
      {
        path: 'list-instructores-int',
        component: InstructoresSenaFormColListComponent,
        data: {
          titulo: "Lista De Intructores Internacionales",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'edit-instructores-int',
        component: InstructoresSenaFormColEditComponent,
        data: {
          titulo: "Editar Intructores Internacionales",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'form-instructores-int',
        component: InstructoresSenaFormColFormComponent,
        data: {
          titulo: "Formulario Intructores Internacionales",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: "",
        redirectTo: "list-instructores-int",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructoresSenaFormColRoutingModule { }
