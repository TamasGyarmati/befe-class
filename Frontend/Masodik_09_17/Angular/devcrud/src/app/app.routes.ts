import { Routes } from '@angular/router';
import { Edit } from './edit/edit';
import { Create } from './create/create';
import { List } from './list/list';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: List },
  { path: 'create', component: Create },
  { path: 'edit/:id', component: Edit },
  { path: '**', redirectTo: 'list', pathMatch: 'full' },
];
