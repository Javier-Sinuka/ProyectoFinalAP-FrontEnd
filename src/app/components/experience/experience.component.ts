import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service'
import {Contacto} from '../../model'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  contactos?: Contacto[];

  constructor( private apiService: ApiService ){}

  ngOnInit(): void {
    this.apiService.getContactos().subscribe(contactos =>{
      this.contactos = contactos;
    })
  }
}
