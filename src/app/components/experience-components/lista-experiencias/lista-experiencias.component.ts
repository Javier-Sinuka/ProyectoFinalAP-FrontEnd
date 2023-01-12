import {Component, OnInit} from '@angular/core';
import {Experiencia} from "../../../models/experiencia";
import {ExperienciaService} from "../../../service/experiencia.service";

@Component({
  selector: 'app-lista-experiencias',
  templateUrl: './lista-experiencias.component.html',
  styleUrls: ['./lista-experiencias.component.css']
})
export class ListaExperienciasComponent implements OnInit{
  experiencias: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService ) {
  }

  ngOnInit(): void {
    this.cargarExperiencias();
  }

  borrar(id?: number):void{
    alert('Borrar el ' + id);
  }

  cargarExperiencias(): void{
    this.experienciaService.lista().subscribe(
      data => {
        this.experiencias = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
