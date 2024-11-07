import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { TodoComponent } from './todo/todo/todo.component';
import { APP_ROUTES } from './config/app-routes.config';
import { SommeComponent } from './components/somme/somme.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { SingleCvComponent } from './cv/single-cv/single-cv.component';
import { CvComponent } from './cv/cv/cv.component';

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
  },{
    path: APP_ROUTES.somme,
    component: SommeComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'cv/:id',
    component: SingleCvComponent,
  },
];
