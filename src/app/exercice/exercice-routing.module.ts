import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from "./exercice.component";
import {ExoBindingsComponent} from "./exo-bindings/exo-bindings.component";
import {ExoPipesComponent} from "./exo-pipes/exo-pipes.component";
import {ExoDirectivesComponent} from "./exo-directives/exo-directives.component";
import {ExoInputOutputComponent} from "./exo-input-output/exo-input-output.component";

const routes: Routes = [
  {
    path: '',
    component: ExerciceComponent,
    children: [
      {path: 'bindings', component: ExoBindingsComponent},
      {path: 'pipes', component: ExoPipesComponent},
      {path: 'directives', component: ExoDirectivesComponent},
      {path: 'input-output', component: ExoInputOutputComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
