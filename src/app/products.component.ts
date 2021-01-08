import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  productName = 'A Book';
  isDisabled = true;

  products = [];

  private productSubscription: Subscription;

  constructor(private productService: ProductsService) {

    setTimeout(() => {
      this.productName = 'A Tree';
      this.isDisabled = false;
    }, 2000);
  }

  ngOnInit(): void {

    this.productSubscription = this.productService.productUpdated.subscribe();
    this.products = this.productService.getProducts();
    this.productService.productUpdated.subscribe(() => {
      this.products = this.productService.getProducts();
    });

  }

  /*onAddProduct(): void {
    this.products.push(this.productName);
  }
  */
  onAddProduct(form): void {
    console.log(form);
    if (form.valid) {
      /* this.products.push(form.value.productName);*/
      this.productService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string): void {
    this.products = this.products.filter(p => p !== productName);
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
