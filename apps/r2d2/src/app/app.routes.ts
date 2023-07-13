import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonsComponent } from './persons/persons.component';

export const appRoutes: Route[] = [{
    path: 'login',
    component: LoginComponent
}, {
    path: 'persons',
    component: PersonsComponent
}];
