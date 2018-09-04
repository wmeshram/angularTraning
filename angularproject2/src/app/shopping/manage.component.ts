import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../shared/services/product.service';
// Angular Directives starting with '*' are structural directives i.e. they will be assigned position in DOM only if data is present. 
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styles: []
})
export class ManageComponent implements OnInit {

  mgProducts : Product[] = []
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.mgProducts = this.productService.getProducts();
  }

}
