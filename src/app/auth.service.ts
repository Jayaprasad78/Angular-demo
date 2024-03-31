// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }
}
