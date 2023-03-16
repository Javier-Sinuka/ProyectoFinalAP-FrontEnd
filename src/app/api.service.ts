import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Contacto, Credentials} from "./model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>('http://localhost:8080/api/usuario/listaUsuarios');
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


}
