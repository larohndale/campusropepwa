import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthGuardService } from "./core/core.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./shell/shell.module").then(m => m.ShellModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./feature/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "admin-task",
    loadChildren: () =>
      import("./feature/admin-task/admin-task.module").then(
        m => m.AdminTaskModule
      ),
    canActivate: [AuthGuardService]
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
