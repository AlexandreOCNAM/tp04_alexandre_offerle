import { Component } from '@angular/core';
import {Product} from "../../shared/models/Product";
import {Store} from "@ngxs/store";
import {DeleteProduct} from "../../shared/actions/product-action";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: Product[];

  constructor(private store: Store) {
    store.select(state => state.products.products).subscribe((products: Product[]) => {
      this.products = products.filter((p) => p.isInCart);
    }
    );
  }

  deleteProduct(p: Product): void {
    this.store.dispatch(new DeleteProduct(p));
  }
}
