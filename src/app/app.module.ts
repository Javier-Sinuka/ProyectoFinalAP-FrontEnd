import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoguinComponent } from './components/loguin/loguin.component';
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
import { ListaExperienciasComponent } from './components/experience-components/lista-experiencias/lista-experiencias.component';
import { DetalleExperienciaComponent } from './components/experience-components/detalle-experiencia/detalle-experiencia.component';
import { NuevaExperienciaComponent } from './components/experience-components/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experience-components/editar-experiencia/editar-experiencia.component';

import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    LoguinComponent,
    Pagina404Component,
    HomeComponent,
    AboutMeComponent,
    CreateAccountComponent,
    FooterComponent,
    HeaderComponent,
    ContactMeComponent,
    ExperienceComponent,
    ListaExperienciasComponent,
    DetalleExperienciaComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

