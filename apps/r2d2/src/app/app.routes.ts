import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('libs/login/src/lib/login.module').then(
        (module) => module.LoginModule
      ),
  },
  {
    path: 'persons',
    loadChildren: () =>
      import('libs/persons/src/lib/persons.module').then(
        (module) => module.PersonsModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
