import {Subject} from 'rxjs';

export class ProductsService {

  products = ['a Guitar'];
  productUpdated = new Subject();

  addProduct(productName): void {
    this.products.push(productName);
    this.productUpdated.next();
  }

  getProducts(): string[] {
    return [...this.products]; // hier wird eine Kopie des Array products erstellt und returned
  }


  deleteProduct(produkteName: string): void {

    this.products = this.products.filter(p => p !== produkteName);
    this.productUpdated.next(); // Alle subscribanten werden über die änderungen informiert


  }
}
