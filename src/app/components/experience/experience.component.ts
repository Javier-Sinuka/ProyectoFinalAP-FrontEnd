import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service'
import {Contacto, Laboral} from '../../model'
import {Router} from "@angular/router";
import {Observable} from "rxjs";
// import {Experiencia} from "../../models/Experiencia";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit{
  contactos?: Contacto[];
  laborales?: Laboral[];


  constructor( private apiService: ApiService,
               private router: Router){}

  ngOnInit(): void {
    this.apiService.getContactos().subscribe(contactos =>{
      this.contactos = contactos;
    });

    this.apiService.getLaboral().subscribe( laboral =>{
      this.laborales = laboral;
    });
  }

}
