import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shell/shell.module').then(m => m.ShellModule)
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () =>
      import('./feature/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin-task',
    pathMatch: 'full',
    loadChildren: () =>
      import('./feature/admin-task/admin-task.module').then(
        m => m.AdminTaskModule
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
