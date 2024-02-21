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
import {ExoSecuriteAPIComponent} from "./exo-securite-api/exo-securite-api.component";
import {ExoMesbadgesComponent} from "./exo-mesbadges/exo-mesbadges.component";
import {IS_LOGGED} from "./guard/logged.guard";

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
      {path: 'mon-profil/:prenom', component: ExoRoutingComponent, canActivate: [CONNECTED_GUARD]},
      {path: 'securite', component: ExoSecuriteAPIComponent},
      {path: 'mes-badges', component: ExoMesbadgesComponent, canActivate: [IS_LOGGED]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
