import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { Event, Router, RouterModule, Routes, Scroll } from '@angular/router';

import { filter } from 'rxjs/operators';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { RoutingRedirectGuard } from './core/routing-redirect.guard';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(
    @Inject(DOCUMENT) document: Document,
    router: Router,
    viewportScroller: ViewportScroller,
  ) {
    router.events.pipe(filter((e: Event): e is Scroll => e instanceof Scroll)).subscribe(e => {
      if (e.position) {
        // backward navigation
        viewportScroller.scrollToPosition(e.position);
      } else if (e.anchor) {
        // anchor navigation
        // TODO: ViewportScroller.scrollToAnchor method have problems
        const element = document.querySelector(`#${e.anchor}`);
        if (element) {
          element.scrollIntoView();
        }
      } else {
        // forward navigation
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
