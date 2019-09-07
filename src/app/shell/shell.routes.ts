import { Routes } from '@angular/router';
import { ShellComponent } from './shell.component';

const shellRoutes: Routes = [
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
];

const routes: Routes = [
    {
      path: '',
      component: ShellComponent,
      children: shellRoutes
    }
  ];

export default routes;
