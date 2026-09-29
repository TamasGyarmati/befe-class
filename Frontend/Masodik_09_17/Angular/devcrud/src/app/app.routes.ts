import { Routes } from '@angular/router';
import { Edit } from './edit/edit';
import { Create } from './create/create';
import { List } from './list/list';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'not-found', pathMatch: 'full' },
  { path: 'list', component: List },
  { path: 'create', component: Create },
  { path: 'not-found', component: NotFound },
  { path: 'edit/:id', component: Edit },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
