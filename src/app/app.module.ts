import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import {ProductsComponent} from './products.component';
import {ProductsService} from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
