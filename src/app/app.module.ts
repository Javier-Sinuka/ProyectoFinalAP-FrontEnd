import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {  FormsModule, ReactiveFormsModule  } from "@angular/forms";
import  {AuthInterceptor} from "./helpers/auth.interceptor";
import { RolesDirective } from './directives/roles.directive';
import {  ApiService} from "./api.service";
import { AcademicTrainingComponent } from './components/academic-training/academic-training.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Pagina404Component,
    HomeComponent,
    AboutMeComponent,
    CreateAccountComponent,
    FooterComponent,
    HeaderComponent,
    ContactMeComponent,
    ExperienceComponent,
    RolesDirective,
    AcademicTrainingComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true},
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

