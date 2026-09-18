import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './list/list';
import { Create } from './create/create';
import { Edit } from './edit/edit';

const routes: Routes = [
  { path: "", redirectTo: 'list', pathMatch: "full"}, // ha nincs semmi / beírva ide redirectol
  { path: "list", component: List },
  { path: "create", component: Create },
  { path: "edit", component: Edit },
  { path: "**", redirectTo: 'list', pathMatch: "full"} // ha nem létező endpoint akkor ide redirectol
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
