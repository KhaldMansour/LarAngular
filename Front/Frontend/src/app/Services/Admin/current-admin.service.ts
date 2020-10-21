import { AdminTokenService } from './admin-token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrentAdminService {

  constructor( private token : AdminTokenService ) { }
  private loggedin = new BehaviorSubject <boolean>(this.token.loggedin());
  authStatus = this.loggedin.asObservable();

  changeAuthStatus(value :boolean)
  {
    this.loggedin.next(value);
  }
}
