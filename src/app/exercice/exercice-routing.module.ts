import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from "./exercice.component";
import {ExoBindingsComponent} from "./exo-bindings/exo-bindings.component";

const routes: Routes = [
  {
    path: '',
    component: ExerciceComponent,
    children: [
      {path: 'bindings', component: ExoBindingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
