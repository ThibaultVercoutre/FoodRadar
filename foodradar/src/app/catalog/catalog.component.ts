import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Meal, Categorie } from '../plat';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, NgFor, MatChipsModule],
})

export class CatalogComponent  {

  constructor(
    public apiService : ApiService,
    public router: Router
  ){}

  plats: Meal[] = [];
  categories: Categorie[] = [];
  displayedColumns: string[] = ['strMeal', 'actions'];
  description_categorie: string | undefined = '';

  public getPlats(typePlat: string){
    this.description_categorie = this.categories.find(category => category.strCategory === typePlat)?.strCategoryDescription; 
    this.apiService.getPlatsByType(typePlat).subscribe(a =>{
      console.log(a);
      this.plats = a.meals;
    });
  }

  public changeRoute(idPlat: string){
    this.router.navigate(['/plat', idPlat]);
  }

  public getCategory(){
    this.apiService.getCategory().subscribe(a =>{
      this.categories = a.categories;
    });
  }

  ngOnInit(): void {
    this.getCategory();
  }
}
