import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(environment.api_url + 'login', data);
  }

  register(data: any): Observable<any> {
    return this.http.post(environment.api_url + 'register', data);
  }
}
