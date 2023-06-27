import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardsComponent } from 'app/pages/dashboards/dashboards.component';
import { AuthGuard } from 'app/auth/guards/auth.guard';
import { ModuloGuard } from 'app/auth/guards/modulo.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'aprendiz-ext',
        loadChildren: () => import('../../pages/aprendices-ext/aprendices-ext.module').then(m => m.AprendicesExtModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'aprendiz-col',
        loadChildren: () => import('../../pages/aprendices-form-col/aprendices-form-col.module').then(m => m.AprendicesFormColModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'personal-apoyo-ext',
        loadChildren: () => import('../../pages/personal-apoyo-ext/personal-apoyo-ext.module').then(m => m.PersonalApoyoExtModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'expertos-int',
        loadChildren: () => import('../../pages/expertos-int/expertos-int.module').then(m => m.ExpertosIntModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'instructores-ext',
        loadChildren: () => import('../../pages/instructores-ext/instructores-ext.module').then(m => m.InstructoresExtModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'voluntarios-int',
        loadChildren: () => import('../../pages/voluntarios-int/voluntarios-int.module').then(m => m.VoluntariosIntModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'instructores-sena-col',
        loadChildren: () => import('../../pages/instructores-sena-form-col/instructores-sena-form-col.module').then(m => m.InstructoresSenaFormColModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'voluntarios-form-col',
        loadChildren: () => import('../../pages/voluntarios-sena-form-col/voluntarios-sena-form-col.module').then(m => m.VoluntariosSenaFormColModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'voluntarios-form-inst-col',
        loadChildren: () => import('../../pages/voluntarios-sena-inst-form-col/voluntarios-sena-inst-form-col.module').then(m => m.VoluntariosSenaInstFormColModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'asesor',
        loadChildren: () => import('../../pages/configuracion/asesor/asesor.module').then(m => m.AsesorModule),
        canActivateChild: [ModuloGuard]
      },
      {
        path: 'paises',
        loadChildren: () => import('../../pages/configuracion/paises/paises.module').then(m => m.PaisesModule),
        canActivateChild: [ModuloGuard]
      },
      {
        path: 'instituciones',
        loadChildren: () => import('../../pages/configuracion/instituciones/instituciones.module').then(m => m.InstitucionesModule),
        canActivateChild: [ModuloGuard]
      },
      {
        path: 'convenios',
        loadChildren: () => import('../../pages/configuracion/convenios/convenios.module').then(m => m.ConveniosModule),
        canActivateChild: [ModuloGuard]
      },
      {
        path: 'reportes',
        loadChildren: () => import('../../pages/configuracion/reportes/reportes.module').then(m => m.ReportesModule),
        canActivateChild: [ModuloGuard]
      },
      {
        path: 'usuarios',
        loadChildren: () => import('../../pages/configuracion/usuarios/usuarios.module').then(m => m.UsuariosModule),
        canActivateChild: [ModuloGuard]
      },
      {
        path: 'dashboards',
        component: DashboardsComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'dashboards',
        pathMatch: 'full',
      },
      {
        path: '**', redirectTo: 'dashboards', pathMatch: 'full'
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutes { }