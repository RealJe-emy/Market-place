import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:5041/api/register';  // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  register(registrationData: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, registrationData);
  }
}
