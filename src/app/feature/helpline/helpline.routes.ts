import { Routes } from '@angular/router';

const helplineRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/user-helpline/user-helpline.module').then(
        m => m.UserHelplineModule
      )
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin-helpline/admin-helpline.module').then(
        m => m.AdminHelplineModule
      )
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./pages/helpline-add/helpline-add.module').then(
        m => m.HelplineAddModule
      )
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./pages/helpline-edit/helpline-edit.module').then(
        m => m.HelplineEditModule
      )
  }
];

export default helplineRoutes;
