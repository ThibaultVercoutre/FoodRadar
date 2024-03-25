import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meals } from './plat';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseURL = 'https://www.themealdb.com/api/json/v1/1/'
  constructor(private http:HttpClient){}

  getPlatsByType(type: string): Observable<Meals>{
    return this.http.get<Meals>(this.baseURL + 'search.php?s=' + type);
  }
}
