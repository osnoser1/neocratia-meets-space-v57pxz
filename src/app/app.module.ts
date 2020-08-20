import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgMaterialModule } from './core/ng-material.module';
import { PagesModule } from './pages/pages.module';
import { RoutingRedirectGuard } from './core/routing-redirect.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    CoreModule,
    NgMaterialModule,
    PagesModule,
  ],
  // entryComponents: [RoutingRedirectGuard],
  providers: [RoutingRedirectGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
