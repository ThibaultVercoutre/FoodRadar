import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ResearchComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
