import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Ensure HttpClient is imported
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:5041/api/login';  // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}  // Ensure HttpClient is injected

  login(loginData: { username: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, loginData);
  }
}
