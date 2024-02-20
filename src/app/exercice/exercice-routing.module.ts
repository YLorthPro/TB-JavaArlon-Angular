import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from "./exercice.component";
import {ExoBindingsComponent} from "./exo-bindings/exo-bindings.component";
import {ExoPipesComponent} from "./exo-pipes/exo-pipes.component";
import {ExoDirectivesComponent} from "./exo-directives/exo-directives.component";
import {ExoInputOutputComponent} from "./exo-input-output/exo-input-output.component";
import {JustePrixComponent} from "./juste-prix/juste-prix.component";
import {ExoFormsComponent} from "./exo-forms/exo-forms.component";
import {ExoRoutingComponent} from "./exo-routing/exo-routing.component";
import {CONNECTED_GUARD} from "./guard/connected.guard";

const routes: Routes = [
  {
    path: '',
    component: ExerciceComponent,
    children: [
      {path: 'bindings', component: ExoBindingsComponent},
      {path: 'pipes', component: ExoPipesComponent},
      {path: 'directives', component: ExoDirectivesComponent},
      {path: 'input-output', component: ExoInputOutputComponent},
      {path: 'juste-prix', component: JustePrixComponent},
      {path: 'forms', component: ExoFormsComponent},
      {path: 'mon-profil/:prenom', component: ExoRoutingComponent, canActivate: [CONNECTED_GUARD]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
