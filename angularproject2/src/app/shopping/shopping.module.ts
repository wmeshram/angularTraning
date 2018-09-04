import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { ManageComponent } from './manage.component';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

let shoppingLinks = [
    {path : "manage", component : ManageComponent}
]

@NgModule({
    declarations: [
        ProductsComponent,
        CartitemsComponent,
        ManageComponent
    ],
    imports : [
        RouterModule.forChild(shoppingLinks),
        CommonModule
    ],
    exports: [ProductsComponent,CartitemsComponent]
})
export class ShoppingModule {
    constructor() {
        console.log("Shopping Module Constructor")
    }
}