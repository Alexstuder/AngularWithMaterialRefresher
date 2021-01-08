import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productName = 'A Book';
  isDisabled = true;

  products = ['ABook', 'A Tree'];

  constructor(private productService: ProductsService) {

    setTimeout(() => {
      this.productName = 'A Tree';
      this.isDisabled = false;
    }, 2000);
  }

  ngOnInit(): void {
  }

  /*onAddProduct(): void {
    this.products.push(this.productName);
  }
  */
  onAddProduct(form): void {
    console.log(form);
    if(form.valid){
      this.products.push(form.value.productName);
    }
  }

  onRemoveProduct(productName: string): void {
    this.products = this.products.filter(p => p !== productName);
  }
}
