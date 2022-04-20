import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  // id: any = localStorage.getItem('userLogin')
  constructor(private http: HttpClient) { }
  // getAll(): Observable<any>{
  //   return this.http.get<any>(environment.api_url + "posts/recruiter" );
  // }

  getAllPostOfUser(id):Observable<any> {
    return this.http.get<any>(environment.api_url + `posts/${id}/recruiter`)
  }
}
