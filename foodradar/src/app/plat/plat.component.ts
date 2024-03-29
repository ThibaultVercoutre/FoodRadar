import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { Meal } from '../plat';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrl: './plat.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, CommonModule, MatListModule],
})
export class PlatComponent implements OnInit{
  id: string | null = '';
  plat: Meal = {} as Meal;
  listIngredients: string[] = [];
  listMeasures: string[] = [];

  constructor(
    public route: ActivatedRoute,
    public apiService : ApiService) {
  }

  getRange(start: number, end: number): number[] {
    return Array.from({length: end - start + 1}, (_, index) => start + index);
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getPlatsById(this.id).subscribe(a =>{
      console.log(a);
      this.plat = a.meals[0];

      for (let i of this.getRange(1, 20)){
        if (this.plat['strIngredient' + i] != '' && this.plat['strIngredient' + i] != null){
          this.listIngredients.push(this.plat['strIngredient' + i]);
          this.listMeasures.push(this.plat['strMeasure' + i]);
        }
      }
    });

    console.log(this.listIngredients);
    console.log(this.listMeasures);
  }
}
