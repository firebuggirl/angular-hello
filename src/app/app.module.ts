import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchBoxDirective } from './search-box.directive';
import { SaleDataService } from "app/sale-data.service";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    SearchBoxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SaleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
