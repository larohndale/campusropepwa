import { Routes } from '@angular/router';
import { ShellComponent } from './shell.component';

export const shellRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'helpline',
    loadChildren: () =>
      import('../feature/helpline/helpline.module').then(m => m.HelplineModule)
  },
  {
    path: 'trending',
    loadChildren: () =>
      import('../feature/trending/trending.module').then(m => m.TrendingModule)
  },
  {
    path: 'admin-task',
    loadChildren: () =>
      import('../feature/admin-task/admin-task.module').then(
        m => m.AdminTaskModule
      )
  }
];

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: shellRoutes
  }
];

export default routes;
