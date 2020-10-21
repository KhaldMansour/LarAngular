import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {


  constructor(private http: HttpClient) {}
  private baseURL = 'http://localhost:8000/api/admin';

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
