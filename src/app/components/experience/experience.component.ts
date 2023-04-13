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
  laboral?: Laboral;
  formulario: FormGroup = this.fb.group({
    id:[],
    nombreExperiencia: [],
    modalidadExperiencia: [],
    lugarExperiencia: [],
    periodoExperiencia: [],
    contenidoExperiencia: [],
  })
  laboralEnEdicion?: Laboral;
  idLaboral?:number;
  idParaPrueba?:number;

  // labo?: Laboral[] = [{id:123,lugarExperiencia:'cordoba',contenidoExperiencia:'contenido exp',
  // periodoExperiencia:'periodo asdf', nombreExperiencia:'nombreexpeee', modalidadExperiencia:'pres'}];
  labo?: Laboral[];
  lab?: Laboral;
  valor?: Array<number>[];

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
      // for (var i = 0; i < this.laborales.length; i++) {
        // this.lab?.id = laboral[i].id;
        // console.log("Contenido laboral");
        // console.log(laboral[i]);
        // this.labo = [{id:this.laborales[i].id,nombreExperiencia:this.laborales[i].nombreExperiencia,
        //   modalidadExperiencia:this.laborales[i].modalidadExperiencia, periodoExperiencia:this.laborales[i].periodoExperiencia,
        //   contenidoExperiencia:this.laborales[i].contenidoExperiencia, lugarExperiencia:this.laborales[i].lugarExperiencia}]
        // this.labo?.push({id:this.laborales[i].id,nombreExperiencia:this.laborales[i].nombreExperiencia,
        //   modalidadExperiencia:this.laborales[i].modalidadExperiencia, periodoExperiencia:this.laborales[i].periodoExperiencia,
        //   contenidoExperiencia:this.laborales[i].contenidoExperiencia, lugarExperiencia:this.laborales[i].lugarExperiencia});
      // }
      console.log("Desde getLaboral: " + this.valor);
    });
  }

  //Seguir desde aca

  test(){
    console.log("contenido labo: " + this.labo);

    for(var i = 0; i < 10; i++){
      this.valor?.push();
    }

    console.log("Desde getLaboral: " + this.valor);
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
