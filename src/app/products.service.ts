export class ProductsService {

  products = ['a Guitar'];

  addProduct(productName){
    this.products.push(productName);
  }

  getProducts(){
    return [...this.products]; // hier wird eine Kopie des Array products erstellt und returned
  }




}
