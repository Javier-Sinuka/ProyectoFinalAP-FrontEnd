import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Contacto, Credentials, Laboral} from "./model";
import {Router} from "@angular/router";
import {Experiencia} from "./models/Experiencia";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private URL_EXPERIENCIA:string = 'http://localhost:8080/api/contenido_experiencia'

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(creds: Credentials){
    return this.http.post('http://localhost:8080/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) =>{
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer', '');

      localStorage.setItem('token', token);

      return body;
    }))
  }

  logout():void{
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  //Verifica que este logueado el usuario
  verifyLogged():boolean{
    const token = localStorage.getItem('token');
    // return token ? true : false;
    return !!token; //Lo mismo que arriba, pero simplificado je
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getExperienciaAll(){
    return this.http.get<Experiencia[]>(this.URL_EXPERIENCIA + '/lista');
  }

  getContactos(){
    return this.http.get<Contacto[]>('http://localhost:8080/api/usuario/listaUsuarios');
  }

  getLaboral(){
    return this.http.get<Laboral[]>('http://localhost:8080/api/laboral/listaLaboral')
  }

}
