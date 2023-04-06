import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  formularioCorreo: FormGroup;

  constructor(
    private router: Router,
    private apiService: ApiService,
  ) {
    this.formularioCorreo = new FormGroup({
      nombre: new FormControl('',Validators.required),
      correo: new FormControl('',[Validators.required, Validators.email]),
      contenido: new FormControl('',Validators.required)
    })
  }

  envioCorreo(){
    let params = {
      nombre: this.formularioCorreo.value.nombre,
      email: this.formularioCorreo.value.correo,
      contenido: this.formularioCorreo.value.contenido
    }
    console.log(params);
  }
}
