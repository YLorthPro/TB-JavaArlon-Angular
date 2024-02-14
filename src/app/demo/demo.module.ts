import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import {DemoComponent} from "./demo.component";
import { DemoHomeComponent } from './demo-home/demo-home.component';


@NgModule({
  declarations: [
    DemoComponent,
    DemoHomeComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
