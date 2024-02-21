import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from "./demo.component";
import {DemoHomeComponent} from "./demo-home/demo-home.component";
import {DemoBindingsComponent} from "./demo-bindings/demo-bindings.component";
import {DemoPipeComponent} from "./demo-pipe/demo-pipe.component";
import {DemoDirectivesComponent} from "./demo-directives/demo-directives.component";
import {DemoInputOutputComponent} from "./demo-input-output/demo-input-output.component";
import {DemoServicesComponent} from "./demo-services/demo-services.component";
import {LoginService} from "./services/login.service";
import {LoginComponent} from "./login/login.component";
import {DemoFormsComponent} from "./demo-forms/demo-forms.component";
import {GEOFFREY_ONLY} from "./guard/geoffrey-only";
import {ObservableService} from "./services/observable.service";
import {DemoObservablesComponent} from "./demo-observables/demo-observables.component";
import {DemoHttpClientComponent} from "./demo-http-client/demo-http-client.component";

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {path: 'home', component: DemoHomeComponent},
      {path: 'bindings', component: DemoBindingsComponent},
      {path: 'pipes', component: DemoPipeComponent},
      {path: 'directives', component: DemoDirectivesComponent},
      {path: 'input-output', component: DemoInputOutputComponent},
      {path: 'service', component: DemoServicesComponent},
      {path: 'login', component: LoginComponent},
      {path: 'observables', component: DemoObservablesComponent},
      {path: 'forms', component: DemoFormsComponent, canActivate: [GEOFFREY_ONLY]},
      {path: 'http-client', component: DemoHttpClientComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
