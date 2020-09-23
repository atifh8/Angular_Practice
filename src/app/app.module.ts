import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FilterComponent } from './filter/filter.component';
import { OrdersComponent } from './orders/orders.component';
import { Day3Component } from './day3/day3.component';
import { Day3ChildComponent } from './day3-child/day3-child.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FilterComponent,
    OrdersComponent,
    Day3Component,
    Day3ChildComponent,
    PagenotfoundComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
