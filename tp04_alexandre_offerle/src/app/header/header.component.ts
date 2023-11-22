import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/models/Product";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {ProductsState} from "../../shared/states/products-state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  products: Product[];
  constructor(private store: Store) {
    store.select(state => state.products.products).subscribe((products: Product[]) => {
      this.products = products.filter((p) => p.isInCart);
    }
    );
  }



  @Select(ProductsState.getNbProductsInCart) nbProductsInCart$: Observable<number>;

  ngOnInit(): void {
  }
}
