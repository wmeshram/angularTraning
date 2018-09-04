import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartitem.model';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styles: []
})
export class CartitemsComponent implements OnInit {

  cartItems : CartItem[] = [];

  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

}
