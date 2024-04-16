import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FoodNutrient, Meal, Meal2 } from '../plat';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrl: './plat.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, CommonModule, MatListModule],
})
export class PlatComponent implements OnInit{
  email: string | null = 'No email';
  isConnected: boolean = false;

  auth = getAuth();
  user = this.auth.currentUser;

  id: string | null = '';
  plat: Meal = {} as Meal;
  plats2: Meal2[] = [];
  listIngredients: string[] = [];
  listMeasures: string[] = [];

  constructor(
    public route: ActivatedRoute,
    public apiService : ApiService,
    private router: Router) {
      if (this.user) {
        this.email = this.user.email;
        this.isConnected = true;
      }
  }

  getRange(start: number, end: number): number[] {
    return Array.from({length: end - start + 1}, (_, index) => start + index);
  }

  redirect(page: string) {
    this.router.navigate([page]);
  }
  
  separerEtapes(texte: string): string[] {
    const regEx = /STEP \d+(.*?)(?=STEP \d+|$)/gs;
    const etapesMatches = texte.match(regEx);

    if (etapesMatches) {
        const etapes = etapesMatches.map(etape => etape.trim().replace(/STEP \d+/, ''));
        return etapes;
    } else {
        const etapesParagraphe = texte.split(/\n+/).map(etape => etape.trim());
        return etapesParagraphe;
    }
  }

  valeursNutritionnelles(): FoodNutrient[] {
    console.log(this.plats2[0]);
    return this.plats2[0].foodNutrients;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.apiService.getPlatsById(this.id).subscribe(a =>{
      this.plat = a.meals[0];

      this.apiService.rechercherPlat(this.plat.strMeal).subscribe(a =>{
        this.plats2 = a.foods;
      });

      for (let i of this.getRange(1, 20)){
        if (this.plat['strIngredient' + i] != '' && this.plat['strIngredient' + i] != null){
          this.listIngredients.push(this.plat['strIngredient' + i]);
          this.listMeasures.push(this.plat['strMeasure' + i]);
        }
      }
    });
  }
}
