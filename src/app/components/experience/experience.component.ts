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
  laborales?: Laboral[] = [];
  laboral?: Laboral;
  formulario: FormGroup = this.fb.group({
    id:[],
    nombreExperiencia: [],
    modalidadExperiencia: [],
    lugarExperiencia: [],
    periodoExperiencia: [],
    contenidoExperiencia: [],
  })
  idLaboral?:number;
  idParaPrueba?:number;


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

  verifyLoggedAFK():boolean{
    return this.apiService.verifyLoggedAFK();
  }

  getLaboral(){
    this.apiService.getLaboral().subscribe( laboral =>{
      this.laborales?.push(...laboral);
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

  setId(id: number){
    this.idLaboral = id;
  }

  getIdSeteado(){
    return this.idLaboral;
  }

  registrarExperiencia(){
    const value = this.formulario.value;
    this.apiService.setLaboral(value).subscribe(data =>{
      this.getLaboral();

      alert("Se agrego con exito la Nueva Experiencia Laboral!");
      localStorage.removeItem('flag');
      this.router.navigate(['/home']);
    });
    localStorage.removeItem('flag');
    this.formulario.reset();
    this.test();
  }

  modificarExperiencia(){
    this.formulario.get('id')?.setValue(this.idLaboral);
    const value = this.formulario.value;
    this.apiService.updateLaboral(value).subscribe(data =>{
      this.getLaboral();
      alert("Se edito experiencia laboral con Exito!");
      localStorage.removeItem('edit');
      this.router.navigate(['/home']);
      console.log(value);
    })
    localStorage.removeItem('flag');
    this.formulario.reset();
    this.test();
  }

  test(){
    window.location.reload();
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

  editarExperienciaLaboral(id: number){
    localStorage.setItem('edit', 'true');
    this.setId(id);
  }

  laboralID(id?: number){
    if (id = this.idParaPrueba){
      return true;
    }else{
      return false;
    }
  }

  editOn(){
    if(localStorage.getItem('edit') == 'true'){
      return true;
    } else{
      return false;
    }
  }

}
