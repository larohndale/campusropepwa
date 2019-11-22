import { Routes } from '@angular/router';

export const feedRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/feeds/feeds.module').then(
        m => m.FeedsModule
      )
  }
];

export default feedRoutes;
