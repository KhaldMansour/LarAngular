import { TokenService } from './token.service';
import { Injectable , Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor( private Injector: Injector ) {
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    let token = this.Injector.get(TokenService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token.get()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
