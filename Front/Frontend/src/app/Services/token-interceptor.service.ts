import { AdminTokenService } from './Admin/admin-token.service';
import { TokenService } from './token.service';
import { Injectable , Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor( private Injector: Injector , private Inject : Injector ) {
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    let userToken = this.Injector.get(TokenService)
    let adminToken = this.Inject.get(AdminTokenService)
    let token = (userToken.get() ? userToken.get() : adminToken.get());

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
