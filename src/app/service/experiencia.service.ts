import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Experiencia} from "../models/experiencia";

@Injectable({
  providedIn: 'root'
})

//CORAZON DE LA APLICACION: TOMA LOS DATOS DEL FRONT Y LO ENVIA A LA API REST!
export class ExperienciaService {
  experienciaURL = 'http://localhost:8080/contenido_experiencia/';

  constructor(private httpClient: HttpClient) { }

  // Metodos del Back
  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'lista')
  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + `detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.experienciaURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.experienciaURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.experienciaURL + `delete/${id}`);
  }
}
