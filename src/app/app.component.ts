import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ //Eliminar constructor si no soluciono pantalla blanca
  title = 'Portafolio - Javier Siñuka';
  isCollapsed = false;

  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.screenY > 100){
      this.navbarfixed = true;
    }else{
      this.navbarfixed = false;
    }
  }

  ngOnInit(): void {
  }
}
