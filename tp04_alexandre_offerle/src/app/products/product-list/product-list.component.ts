import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductsState} from "../../../shared/states/products-state";
import {Observable} from "rxjs";
import {Product} from "../../../shared/models/Product";
import {AddProduct, AddProductToCart, DeleteProduct} from "../../../shared/actions/product-action";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  constructor(private store: Store) {
  }

  @Select(ProductsState.getProductList) products$: Observable<Product[]>;
  ngOnInit(): void {
  }

  addProductToCart(p: Product): void {
    this.store.dispatch(new AddProductToCart(p));
  }

  deleteProduct(p: Product): void {
    this.store.dispatch(new DeleteProduct(p));
  }

}
