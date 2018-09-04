import { Injectable } from "@angular/core";
import { CartItem } from "../../models/cartitem.model";

@Injectable()

export class CartService {
    private cartData : CartItem[] = [];

    constructor(){

    }

    getCartItems(){
        return this.cartData;
    }

    addCartItem(newItem : CartItem) {
        for(let i=0;i<this.cartData.length;i++){
            if(this.cartData[i].id == newItem.id){
              this.cartData[i].qty++;
              return;
            }
        }
        this.cartData.push(newItem);
    }

    deleteCartItem(idx : number){
        this.cartData.splice(idx,1); // splice(position, no. of elements to be removed)
    }
}