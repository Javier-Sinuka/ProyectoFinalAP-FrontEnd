import {Component, OnInit} from '@angular/core';
import {ExperienciaService} from "../../../service/experiencia.service";
import {Experiencia} from "../../../models/experiencia";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit{
  nombreExperiencia: string = '';
  modalidadExperiencia: string = '';
  lugarExperiencia: string = '';
  tiempoExperiencia: number = 0;
  contenidoExperiencia: string = '';


  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(){
  }

  onCreate(): void{
    const experiencia = new Experiencia(this.nombreExperiencia, this.lugarExperiencia, this.modalidadExperiencia, this.contenidoExperiencia, this.tiempoExperiencia);
    this.experienciaService.save(experiencia).subscribe(
      data =>{
        this.toastr.success('Experiencia Cargada!', 'OK', {timeOut: 3000});
        this.router.navigate(['/lista-experiencia']); //de aca le decimos que vaya experiencia una vez que termine de hacer
        // la carga de la experiencia
      },
        error =>{
          this.toastr.error(error.error.mensaje, 'FAIL', {timeOut: 3000});
          this.router.navigate(['/lista-experiencia']);
      }
    );
  }

}
