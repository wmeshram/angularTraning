import { Injectable } from "@angular/core";
import { Product } from "../../models/product.model";

@Injectable()

export class ProductService{

    private productsData : Product[] = []

    constructor(){
        console.log("product service");
        this.productsData = [
            new Product(1,"Bravia",65000,"Sony TV"),
        new Product(2,"Iphone X",135000,"Apple Phone"),
        new Product(3,"ThinkPad",150000,"Lenovo laptop")
        ]
    }

    getProducts(){
        return this.productsData;
    }
}