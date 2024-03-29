import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meals } from './plat';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseURL = 'https://www.themealdb.com/api/json/v1/1/'
  public baseURL2 = 'https://api.nal.usda.gov/fdc/v1/'
  private apikey = 'lEnWotpRshtJYEDLzGt822CMOpsVILHbnJX8T6rx'
  constructor(private http:HttpClient){}

  getPlatsByType(type: string): Observable<Meals>{
    return this.http.get<Meals>(this.baseURL + 'search.php?s=' + type);
  }

  getPlatsById(id: string | null): Observable<Meals>{
    return this.http.get<Meals>(this.baseURL + 'lookup.php?i=' + id);

  rechercherPlat(query: string): Observable<Meals>{
    return this.http.get<Meals>(this.baseURL2 + 'foods/search?api_key='+ this.apikey +'&query=' + query);
  }
}
