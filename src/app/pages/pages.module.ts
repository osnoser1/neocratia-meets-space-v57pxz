import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ProductsComponent } from './products/products.component';
import { NgMaterialModule } from '../core/ng-material.module';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, NgMaterialModule],
  declarations: [HomeComponent, TeamComponent, ProductsComponent],
  exports: [ProductsComponent, HomeComponent, TeamComponent, ProductsComponent]
})
export class PagesModule {}
