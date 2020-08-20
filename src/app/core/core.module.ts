import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgMaterialModule } from './ng-material.module';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  imports: [CommonModule, NgMaterialModule, RouterModule],
  declarations: [NavbarComponent, SideMenuComponent, FooterComponent],
  exports: [NavbarComponent, NgMaterialModule, SideMenuComponent, FooterComponent],
})
export class CoreModule {}
