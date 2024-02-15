import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import {DemoComponent} from "./demo.component";
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DemoComponent,
    DemoHomeComponent,
    DemoBindingsComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
