import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Meal, Meals, Meal2 } from '../plat';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrl: './research.component.css',
  standalone: true,
  imports: [MatTableModule, MatIconModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, FormsModule],
  
})

export class ResearchComponent  {

  constructor(
    public apiService : ApiService
  ){}

  query: any;
  plats: Meal[] = [];
  plats2: Meal2[] = [];
  displayedColumns: string[] = ['strMeal', 'actions'];

  public rechercher(query: string){
    this.apiService.getPlatsByType(query).subscribe(a =>{
      console.log(a);
      this.plats = a.meals;
    })
    this.apiService.rechercherPlat(query).subscribe(a =>{
      console.log(a);
      this.plats2 = a.foods;
    })
  }
}