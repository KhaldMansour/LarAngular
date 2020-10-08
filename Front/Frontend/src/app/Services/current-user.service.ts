import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  constructor( private Token : TokenService) { }

  private loggedin = new BehaviorSubject <boolean>(this.Token.loggedin());
  authStatus = this.loggedin.asObservable();

  changeAuthStatus(value :boolean)
  {
    this.loggedin.next(value);
  }

}
