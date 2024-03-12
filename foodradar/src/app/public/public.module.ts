import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PublicRoutingModule } from './public-routing.module';
import { PlayoutComponent } from './playout/playout.component';
import { PnavbarComponent } from './pnavbar/pnavbar.component';



@NgModule({
  declarations: [
    HomeComponent,
    ResearchComponent,
    CatalogComponent,
    PlayoutComponent,
    PnavbarComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
