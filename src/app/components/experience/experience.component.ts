import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service'
import {Contacto, Credentials, Laboral} from '../../model'
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LaboralClass} from "../../models/LaboralClass";


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit{
  contactos?: Contacto[];
  laborales?: Laboral[];
  formulario: FormGroup = this.fb.group({
    nombreExperiencia: [],
    modalidadExperiencia: [],
    lugarExperiencia: [],
    periodoExperiencia: [],
    contenidoExperiencia: [],
  })
  laboralEnEdicion?: Laboral;


  constructor( private apiService: ApiService,
               private router: Router,
               private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.apiService.getContactos().subscribe(contactos =>{
      this.contactos = contactos;
      console.log(contactos);
    });
    this.getLaboral();

  }
  verifyLogged():boolean{
    return this.apiService.verifyLogged();
  }

  getLaboral(){
    this.apiService.getLaboral().subscribe( laboral =>{
      this.laborales = laboral;
    });
  }

  // CREACION DE EXPERIENCIA
  crearExperiencia(){
    localStorage.setItem('flag', 'true');
  }
  getFlag(){
    if(localStorage.getItem('flag') == 'true'){
      return true;
    } else{
      return false;
    }
  }
  registrarExperiencia(){
    const value = this.formulario.value;

      this.apiService.setLaboral(value).subscribe(data =>{
        this.getLaboral();
        alert("Se agrego con exito la Nueva Experiencia Laboral!");
        localStorage.removeItem('flag');
        this.router.navigate(['/home']);
      })
      localStorage.removeItem('flag');
  }

  eliminarExperienciaLaboral(id: number){
    if(confirm("¿Realmente quiere elminar la Experiencia Laboral?")){
      this.apiService.deleteLaboral(id).subscribe(() => {
        this.getLaboral();
        this.router.navigate(['/home']);
      });
      alert("La Experiencia Laboral se elimino correctamente!");
    }
    window.location.reload();
  }

  editarExperienciaLaboral(laboral: Laboral){
    localStorage.setItem('edit', 'true');
    this.laboralEnEdicion = laboral;
    this.formulario.setValue({
      nombreExperiencia: laboral.nombreExperiencia,
      modalidadExperiencia: laboral.modalidadExperiencia,
      lugarExperiencia: laboral.lugarExperiencia,
      periodoExperiencia: laboral.periodoExperiencia,
      contenidoExperiencia: laboral.contenidoExperiencia,
    })
  }

  editOn(){
    if(localStorage.getItem('edit') == 'true'){
      return true;
    } else{
      return false;
    }
  }

  getLlamadoTest(){
    this.laborales?.forEach(function (value){
    })
  }

}
