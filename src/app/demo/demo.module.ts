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
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { EnfantComponent } from './demo-input-output/enfant/enfant.component';
import { DemoServicesComponent } from './demo-services/demo-services.component';


@NgModule({
  declarations: [
    DemoComponent,
    DemoHomeComponent,
    DemoBindingsComponent,
    DemoPipeComponent,
    MiMajPipe,
    DemoDirectivesComponent,
    SurlignageDirective,
    DemoInputOutputComponent,
    EnfantComponent,
    DemoServicesComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
