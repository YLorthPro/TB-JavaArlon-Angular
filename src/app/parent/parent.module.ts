import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnfantComponent } from './enfant/enfant.component';
import {ParentRoutingModule} from "./parent-routing.module";



@NgModule({
  declarations: [
    EnfantComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
