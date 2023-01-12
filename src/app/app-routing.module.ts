import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Pagina404Component} from "./components/pagina404/pagina404.component";
import {HomeComponent} from "./components/home/home.component";
import {LoguinComponent} from "./components/loguin/loguin.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {CreateAccountComponent} from "./components/create-account/create-account.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ContactMeComponent} from "./components/contact-me/contact-me.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {
  ListaExperienciasComponent
} from "./components/experience-components/lista-experiencias/lista-experiencias.component";
import {
  DetalleExperienciaComponent
} from "./components/experience-components/detalle-experiencia/detalle-experiencia.component";
import {
  NuevaExperienciaComponent
} from "./components/experience-components/nueva-experiencia/nueva-experiencia.component";
import {
  EditarExperienciaComponent
} from "./components/experience-components/editar-experiencia/editar-experiencia.component";



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component:HomeComponent},
  {path: 'loguin', component:LoguinComponent},
  {path: 'create-account', component:CreateAccountComponent},
  {path: 'about-me', component:AboutMeComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'contact-me', component:ContactMeComponent},
  {path: 'experience', component:ExperienceComponent},
  {path: 'lista-experiencia', component: ListaExperienciasComponent},
  {path: 'detalle/:id', component: DetalleExperienciaComponent},
  {path: 'nueva-experiencia', component: NuevaExperienciaComponent},
  {path: 'editar/:id', component: EditarExperienciaComponent},
  {path: '**', redirectTo: '', pathMatch: "full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
