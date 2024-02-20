import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import {ExerciceComponent} from "./exercice.component";
import { ExoBindingsComponent } from './exo-bindings/exo-bindings.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ExoPipesComponent } from './exo-pipes/exo-pipes.component';
import {ConvertPipe} from "./pipes/convert.pipe";
import { ExoDirectivesComponent } from './exo-directives/exo-directives.component';
import { ExoInputOutputComponent } from './exo-input-output/exo-input-output.component';
import { CreateComponent } from './exo-input-output/create/create.component';
import { ReadComponent } from './exo-input-output/read/read.component';
import { JustePrixComponent } from './juste-prix/juste-prix.component';
import { ErreurComponent } from './juste-prix/erreur/erreur.component';
import { ExoFormsComponent } from './exo-forms/exo-forms.component';
import { ExoRoutingComponent } from './exo-routing/exo-routing.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    ExoBindingsComponent,
    ExoPipesComponent,
    ConvertPipe,
    ExoDirectivesComponent,
    ExoInputOutputComponent,
    CreateComponent,
    ReadComponent,
    JustePrixComponent,
    ErreurComponent,
    ExoFormsComponent,
    ExoRoutingComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExerciceModule { }
