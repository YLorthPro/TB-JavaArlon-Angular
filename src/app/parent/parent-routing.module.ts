import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnfantComponent} from "./enfant/enfant.component";

const routes: Routes = [
  {path:'enfant', component:EnfantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
