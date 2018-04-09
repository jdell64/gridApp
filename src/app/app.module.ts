import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import { DynamicModule } from 'ng-dynamic-component';
import {CustomersComponent} from './customers/customers.component';
import {ProductsComponent} from './products/products.component';
import { GridsterModule } from 'angular-gridster2';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    DynamicModule.withComponents([CustomersComponent, ProductsComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
