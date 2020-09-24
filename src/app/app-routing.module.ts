import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { FilterComponent } from './filter/filter.component';
import { OrdersComponent } from './orders/orders.component';
import { Day3Component } from './day3/day3.component';
import { Day3ChildComponent } from './day3-child/day3-child.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'day1', component: UsersComponent },
  { path: 'day2', component: OrdersComponent },
  { path: 'day3', component: Day3Component },
  { path: '', redirectTo: '/day1', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: '**', component: PagenotfoundComponent }, // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// { path: 'product-detail/:id', component: ProductDetailComponent },
