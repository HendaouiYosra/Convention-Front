import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Convention } from './interface/convention';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConventionService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
  getConventions():Observable<Convention[]>{
    return this.http.get<Convention[]>(`${this.apiServerUrl}/convention`);
  }
  addConvention(convention:Convention ):Observable<Convention>{
    return this.http.post<Convention>(`${this.apiServerUrl}/convention`,convention);
  }
  
  updateConvention(convention:Convention):Observable<Convention>{
    return this.http.put<Convention>(`${this.apiServerUrl}/conventions/${convention.id}`,convention);
  }
  deleteConvention(id:number):Observable<unknown>{
    return this.http.delete<unknown>(`${this.apiServerUrl}/conventions/${id}`);
  }
}
