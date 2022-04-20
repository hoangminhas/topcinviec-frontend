import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient)  { }

  getAll(): Observable<any>{
    return this.http.get<any>(environment.api_url + "posts" );
  }

  

  getById(id):Observable<any> {
    return this.http.get(environment.api_url + `posts/${id}/detail`);
  }
}
