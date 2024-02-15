import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {Page404Component} from "./shared/Page404/Page404.component";

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path:'exercice', loadChildren: () => import('./exercice/exercice.module').then(m => m.ExerciceModule)},
  {path:'404', component: Page404Component},
  {path:'**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
