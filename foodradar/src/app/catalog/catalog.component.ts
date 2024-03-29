import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Meal, Meals } from '../plat';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
})

export class CatalogComponent  {

  constructor(
    public apiService : ApiService
  ){}

  plats: Meal[] = [];

  public getPlats(typePlat: string){
    this.apiService.getPlatsByType(typePlat).subscribe(a =>{
      console.log(a);
      this.plats = a.meals;
    })
  }
}
