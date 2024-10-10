import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { TodoComponent } from './todo/todo/todo.component';
import { APP_ROUTES } from './config/app-routes.config';
import { SommeComponent } from './components/somme/somme.component';
import { TwoWayComponent } from './components/two-way/two-way.component';

export const routes: Routes = [
  {
    path: APP_ROUTES.home,
    component: FirstComponent,
  },
  {
    path: APP_ROUTES.todo,
    component: TodoComponent,
  },
  {
    path: APP_ROUTES.somme,
    component: SommeComponent,
  },
  {
    path: ':haja',
    component: TwoWayComponent,
  },
];
