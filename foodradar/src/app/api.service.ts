import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meals, Categories } from './plat';
import { API_KEY } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseURL = 'https://www.themealdb.com/api/json/v1/1/'
  public baseURL2 = 'https://api.nal.usda.gov/fdc/v1/'
  private apikey = API_KEY;
  constructor(private http:HttpClient){}

  getPlatsByType(type: string): Observable<Meals>{
    return this.http.get<Meals>(this.baseURL + 'filter.php?c=' + type);
  }

  getPlatsByName(type: string): Observable<Meals>{
    return this.http.get<Meals>(this.baseURL + 'search.php?s=' + type);
  }

  getCategory(): Observable<Categories>{
    return this.http.get<Categories>(this.baseURL + 'categories.php');
  }

  getPlatsById(id: string | null): Observable<Meals>{
    return this.http.get<Meals>(this.baseURL + 'lookup.php?i=' + id);
  }

  rechercherPlat(query: string): Observable<Meals>{
    return this.http.get<Meals>(this.baseURL2 + 'foods/search?api_key='+ this.apikey +'&query=' + query);
  }
}
