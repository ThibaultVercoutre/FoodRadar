import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Meal, Meals } from '../plat';
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
nomPlat: any;

  constructor(
    public apiService : ApiService
  ){}

  plats: Meal[] = [];

  public getPlats(nomPlat: string){
    this.apiService.getPlatsByType(nomPlat).subscribe(a =>{
      console.log(a);
      this.plats = a.meals;
    })
  }
}