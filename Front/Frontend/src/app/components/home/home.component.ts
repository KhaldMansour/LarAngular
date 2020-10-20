import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  private baseURL = 'http://localhost:8000/api';

  user=null;

  getUser(event : MouseEvent) {
    return this.http.post(`${this.baseURL}/me`, "hi").subscribe(data => console.log(data),
    error => console.log(error)
    
    );
  }



}
