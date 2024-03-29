import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() produkteName: string;
   @Output() productClicked = new EventEmitter();
  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
  }

  onClicked(): void {
   /*this.productClicked.emit();*/
    this.productService.deleteProduct(this.produkteName);
  }
}
