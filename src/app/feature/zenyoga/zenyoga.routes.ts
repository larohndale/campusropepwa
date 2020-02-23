import { Routes } from '@angular/router';

export const zenyogaRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/user-zenyoga/user-zenyoga.module').then(
        m => m.UserZenYogaModule
      )
  },
];

export default zenyogaRoutes;
