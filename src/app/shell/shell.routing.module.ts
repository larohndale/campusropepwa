import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { shellRoutes } from "./shell.routes";

@NgModule({
  imports: [RouterModule.forChild(shellRoutes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {}
