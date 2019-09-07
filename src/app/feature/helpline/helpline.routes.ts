import { Routes } from '@angular/router';

const helplineRoutes: Routes = [
    {
        path: '',
        loadChildren: () =>
        import('./pages/user-helpline/user-helpline.module').then(m => m.UserHelplineModule)
      },
];


export default helplineRoutes;
