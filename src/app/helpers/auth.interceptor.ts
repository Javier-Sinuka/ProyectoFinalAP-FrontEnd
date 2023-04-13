import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {ApiService} from "../api.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private apiService: ApiService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.apiService.getToken();
    const token_AFK = this.apiService.getTokenAFK();

    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(cloned);
    } else if (token_AFK) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token_AFK}`)
      })
      return next.handle(cloned);
    }
    return next.handle(request);//seguir con el pipe

//Este es el bueno!!
    //   if(token){
    //     const cloned = request.clone({
    //       headers: request.headers.set('Authorization', `Bearer ${token}`)
    //     })
    //     return  next.handle(cloned);
    //   }
    //   return next.handle(request);//seguir con el pipe
    // }
  }
}
