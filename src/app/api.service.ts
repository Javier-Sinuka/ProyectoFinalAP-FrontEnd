import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Contacto, Credentials, Laboral} from "./model";
import {Router} from "@angular/router";
import {LaboralClass} from "./models/LaboralClass";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private URL_EXPERIENCIA:string = 'https://proyectofinalap-backend-production.up.railway.app/api/contenido_experiencia'
  laboral?:Laboral;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(creds: Credentials){
    return this.http.post('https://proyectofinalap-backend-production.up.railway.app/login', creds, {
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

  getContactos(){
    return this.http.get<Contacto[]>('https://proyectofinalap-backend-production.up.railway.app/api/usuario/listaUsuarios');
  }

  getLaboral(){
    return this.http.get<Laboral[]>('https://proyectofinalap-backend-production.up.railway.app/api/laboral/listaLaboral')
  }

  setLaboral(laboral: Laboral){
    return this.http.post<Laboral>('https://proyectofinalap-backend-production.up.railway.app/api/laboral/crearLaboral', laboral);
  }

  deleteLaboral(id: number){
    return this.http.delete('https://proyectofinalap-backend-production.up.railway.app/api/laboral/eliminarLaboral/' + id);
  }

  updateLaboral(id: number, laboral: Laboral){
    return this.http.put('https://proyectofinalap-backend-production.up.railway.app/api/laboral/editarLaboral/' + id, laboral);
  }

  envioCorreo(parametros: any){
    return this.http.post('https://proyectofinalap-backend-production.up.railway.app/api/contacto/enviarCorreo', parametros);
  }
}
