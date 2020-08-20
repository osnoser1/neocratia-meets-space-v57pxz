import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgMaterialModule } from '../core/ng-material.module';

import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductsComponent } from './products/products.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, NgMaterialModule],
  declarations: [HomeComponent, TeamComponent, ProductsComponent],
  exports: [ProductsComponent, HomeComponent, TeamComponent, ProductsComponent],
})
export class PagesModule {}
