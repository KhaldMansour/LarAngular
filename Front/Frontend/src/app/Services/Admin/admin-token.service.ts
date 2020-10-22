import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminTokenService {

  constructor() { }
  private iss ={
    login: 'http://localhost:8000/api/admin/login',
    signup: 'http://localhost:8000/api/admin/signup'
  }

  handle(token) {
    this.set(token);
    console.log(this.isValid());
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    let token = this.get();
    if (token) {
      let payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    let payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedin(){
    return this.isValid();
  }
}
