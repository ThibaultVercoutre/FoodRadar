import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Meal, Meals, Meal2 } from '../plat';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrl: './research.component.css',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, FormsModule],
  
})

export class ResearchComponent  {

  constructor(
    public apiService : ApiService
  ){}

  query: any;
  plats: Meal[] = [];
  plats2: Meal2[] = [];

  public rechercher(query: string){
    this.apiService.getPlatsByName(query).subscribe(a =>{
      console.log(a);
      this.plats = a.meals;
    })
    this.apiService.rechercherPlat(query).subscribe(a =>{
      console.log(a);
      this.plats2 = a.foods;
    })
  }

  formatIngredients(ingredients: string): string {
    const ingredientsArray = ingredients.split(', ');
    if (ingredientsArray.length > 3) {
        return ingredientsArray.slice(0, 3).join(', ') + '...';
    } else {
        return ingredients;
    }
  }

  filterPlatsAvecIngredients(plats: any[]): any[] {
    return plats.filter(plat => plat.ingredients && plat.ingredients.trim() !== '');
  }
}