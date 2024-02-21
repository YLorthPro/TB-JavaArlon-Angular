import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import {DemoComponent} from "./demo.component";
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { MiMajPipe } from './pipes/mi-maj.pipe';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { SurlignageDirective } from './directives/surlignage.directive';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { EnfantComponent } from './demo-input-output/enfant/enfant.component';
import { DemoServicesComponent } from './demo-services/demo-services.component';
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./services/login.service";
import { DemoFormsComponent } from './demo-forms/demo-forms.component';
import { DemoObservablesComponent } from './demo-observables/demo-observables.component';
import { DemoHttpClientComponent } from './demo-http-client/demo-http-client.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";


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
    DemoServicesComponent,
    LoginComponent,
    DemoFormsComponent,
    DemoObservablesComponent,
    DemoHttpClientComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ]
})
export class DemoModule { }
