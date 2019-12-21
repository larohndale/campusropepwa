import { Routes } from "@angular/router";
import { AuthGuardService } from "src/app/core/core.module";

export const helplineRoutes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/user-helpline/user-helpline.module").then(
        m => m.UserHelplineModule
      )
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./pages/admin-helpline/admin-helpline.module").then(
        m => m.AdminHelplineModule
      ),
    canActivate: [AuthGuardService]
  },
  {
    path: "add",
    loadChildren: () =>
      import("./pages/helpline-add/helpline-add.module").then(
        m => m.HelplineAddModule
      ),
    canActivate: [AuthGuardService]
  },
  {
    path: "edit/:id",
    loadChildren: () =>
      import("./pages/helpline-edit/helpline-edit.module").then(
        m => m.HelplineEditModule
      ),
    canActivate: [AuthGuardService]
  }
];

export default helplineRoutes;
