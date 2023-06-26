import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from "./auth/guards/auth.guard";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    },
    {
        path: 'admin',
        loadChildren: () =>
            import("./layouts/main/admin-layout.module").then(
                (m) => m.AdminLayoutModule
            ),
        canActivate: [AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: () =>
            import("./layouts/auth/auth.module").then(
                (m) => m.AuthModule
            ),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'auth'
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
