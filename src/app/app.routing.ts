import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin'
    },
    {
        path: 'admin',
        loadChildren: () =>
            import("./layouts/main/admin-layout.module").then(
                (m) => m.AdminLayoutModule
            ),
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
        redirectTo: 'admin'
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
