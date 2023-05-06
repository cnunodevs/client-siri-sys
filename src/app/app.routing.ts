import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/main/admin-layout.component";

const routes: Routes = [
    {
        path: "main",
        loadChildren: () =>
            import("./layouts/main/admin-layout.module").then(
                (m) => m.AdminLayoutModule
            ),
    },
    {
        path: "",
        redirectTo: "main",
        pathMatch: "full",
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "main",
    },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true,
        }),
    ],
    exports: [],
})
export class AppRoutingModule {}
