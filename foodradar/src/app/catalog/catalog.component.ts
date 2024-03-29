import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Meal, Meals } from '../plat';
import { MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, NgFor],
})

export class CatalogComponent  {

  constructor(
    public apiService : ApiService,
    public router: Router
  ){}

  plats: Meal[] = [];
  displayedColumns: string[] = ['strMeal', 'strCategory', 'strArea', 'actions'];

  public getPlats(typePlat: string){
    this.apiService.getPlatsByType(typePlat).subscribe(a =>{
      console.log(a);
      this.plats = a.meals;
    });
  }

  public changeRoute(typePlat: string){
    this.router.navigate(['/plat', typePlat]);
  }
}
