import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private baseURL = 'http://localhost:8000/api';

  login(data) {
    return this.http.post(`${this.baseURL}/login`, data);
  }

  signup(data) {
    return this.http.post(`${this.baseURL}/signup`, data);
  }
  sendPasswordResetLink(data)
  {
    return this.http.post(`${this.baseURL}/sendPasswordResetLink`, data);
  }
  changePassword(data)
  {
    return this.http.post(`${this.baseURL}/resetPassword`, data);
  }
}
