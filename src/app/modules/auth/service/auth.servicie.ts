import { environment } from '../../../environments/enviroment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    console.log(formData);

    return this.http.post(`${this.URL}/user/login`, formData, { withCredentials: true });
}  }

  
