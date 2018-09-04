import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model'
import { ProductService } from '../shared/services/product.service';
import { CartService } from '../shared/services/cart.service';
import { CartItem } from '../models/cartitem.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  products : Product[] = [];
  
  constructor(private productService : ProductService,private cartService : CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product : Product){
    let cartItem = new CartItem(product.id,product.name,product.price,1);
    this.cartService.addCartItem(cartItem);
  }

}
