import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import {ExerciceComponent} from "./exercice.component";
import { ExoBindingsComponent } from './exo-bindings/exo-bindings.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ExerciceComponent,
    ExoBindingsComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule
  ]
})
export class ExerciceModule { }
