import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Page404Component } from './shared/Page404/Page404.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {authInterceptor} from "./demo/interceptor/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide : "apiUrl", useValue : "https://jsonplaceholder.typicode.com/"},
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
