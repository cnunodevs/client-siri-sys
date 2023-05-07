import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'aprendiz-ext',
        loadChildren: () => import('../../pages/aprendices-ext/aprendices-ext.module').then(m => m.AprendicesExtModule)
      },
      {
        path: 'aprendiz-col',
        loadChildren: () => import('../../pages/aprendices-form-col/aprendices-form-col.module').then(m => m.AprendicesFormColModule)
      },
      {
        path: 'personal-apoyo-ext',
        loadChildren: () => import('../../pages/personal-apoyo-ext/personal-apoyo-ext.module').then(m => m.PersonalApoyoExtModule)
      },
      {
        path: 'expertos-int',
        loadChildren: () => import('../../pages/expertos-int/expertos-int.module').then(m => m.ExpertosIntModule)
      },
      {
        path: 'instructores-ext',
        loadChildren: () => import('../../pages/instructores-ext/instructores-ext.module').then(m => m.InstructoresExtModule)
      },
      {
        path: 'voluntarios-int',
        loadChildren: () => import('../../pages/voluntarios-int/voluntarios-int.module').then(m => m.VoluntariosIntModule)
      },
      {
        path: 'instructores-sena-col',
        loadChildren: () => import('../../pages/instructores-sena-form-col/instructores-sena-form-col.module').then(m => m.InstructoresSenaFormColModule)
      },
      {
        path: 'voluntarios-form-col',
        loadChildren: () => import('../../pages/voluntarios-sena-form-col/voluntarios-sena-form-col.module').then(m => m.VoluntariosSenaFormColModule)
      },
      {
        path: '',
        redirectTo: 'aprendiz-ext',
        pathMatch: 'full',
      },
      {
        path: '**', redirectTo: 'aprendiz-ext', pathMatch: 'full'
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutes { }