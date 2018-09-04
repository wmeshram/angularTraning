import { NgModule } from "@angular/core";
import { MySignComponent } from "./mysign.component";
import { ProductService } from "./services/product.service";
import { CartService } from "./services/cart.service";

@NgModule({
    declarations : [
        MySignComponent
    ],
    exports : [ MySignComponent ],
    providers : [ ProductService, CartService ]
})

export class SharedModule{
    constructor(){
        console.log("Shared Module constructor");
    }
}