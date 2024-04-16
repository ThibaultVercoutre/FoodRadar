import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Meal, Meals, Meal2 } from '../plat';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { getAuth } from "firebase/auth";
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrl: './research.component.css',
  standalone: true,
  imports: [MatTableModule, MatIconModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, FormsModule],
  
})

export class ResearchComponent  {

  email: string | null = 'No email';
  isConnected: boolean = false;

  auth = getAuth();
  user = this.auth.currentUser;

  constructor(
    public apiService : ApiService, private router: Router
  ){
    if (this.user) {
      this.email = this.user.email;
      this.isConnected = true;
    }
  }

  query: any;
  plats: Meal[] = [];
  plats2: Meal2[] = [];
  displayedColumns: string[] = ['strMeal', 'strCategory', 'strArea', 'actions'];

  public rechercher(query: string){
    this.apiService.getPlatsByName(query).subscribe(a =>{
      console.log(a);
      this.plats = a.meals;
    })
  }

  public changeRoute(idPlat: string){
    this.router.navigate(['/plat', idPlat]);
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

  redirect(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit(): void {
  }
}