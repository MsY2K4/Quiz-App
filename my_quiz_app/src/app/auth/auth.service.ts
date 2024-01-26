import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';  // Ensure this matches your server's URL


  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }

  register(email: string, password: string): Observable<any> {
    const registerData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, registerData);
  }
  getUserRole(token: string): Observable<any> {
    const headers = { 'Authorization': token };
    return this.http.get<any>(`${this.apiUrl}/user/role`, { headers });
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    return new Observable(observer => {
      observer.next();
      observer.complete();
    });
  }
}
