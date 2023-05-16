import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  constructor(private http: HttpClient) {}

 
   
  getStudentsDetails() : Observable<any[]>{
  
    return( this.http.get<any>(`${environment.apiUrl}/api/students`));
  }




}