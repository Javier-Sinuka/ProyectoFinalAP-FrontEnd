import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Pagina404Component} from "./components/pagina404/pagina404.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {CreateAccountComponent} from "./components/create-account/create-account.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ContactMeComponent} from "./components/contact-me/contact-me.component";
import {ExperienceComponent} from "./components/experience/experience.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'create-account', component:CreateAccountComponent},
  {path: 'about-me', component:AboutMeComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'contact-me', component:ContactMeComponent},
  {path: 'experience', component:ExperienceComponent},
  {path: '**', redirectTo: '', pathMatch: "full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
