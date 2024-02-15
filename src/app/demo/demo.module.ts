import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import {DemoComponent} from "./demo.component";
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import {FormsModule} from "@angular/forms";
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { MiMajPipe } from './pipes/mi-maj.pipe';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { SurlignageDirective } from './directives/surlignage.directive';


@NgModule({
  declarations: [
    DemoComponent,
    DemoHomeComponent,
    DemoBindingsComponent,
    DemoPipeComponent,
    MiMajPipe,
    DemoDirectivesComponent,
    SurlignageDirective
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
