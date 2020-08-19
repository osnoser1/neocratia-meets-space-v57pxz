import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCommonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

const matComponents = [
  MatButtonModule,
  MatCommonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  imports: [matComponents],
  exports: [matComponents]
})
export class NgMaterialModule {}
