import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportesComponent } from './reportes.component';
import { ReportesListComponent } from './reportes-list/reportes-list.component';
import { ReportesFormComponent } from './reportes-form/reportes-form.component';

const routes: Routes = [
  {
    path: '',
    component: ReportesComponent,
    children: [
      {
        path: 'reportes-list',
        component: ReportesListComponent,
        data: {
          titulo: "Lista de aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
        
      },
      {
        path: 'reportes-form',
        component: ReportesFormComponent,
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
export class ReportesRoutingModule { }
