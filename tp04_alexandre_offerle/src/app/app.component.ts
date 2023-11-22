import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Select} from "@ngxs/store"
import {ProductsState} from "../shared/states/products-state";
import {Product} from "../shared/models/Product";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp04_alexandre_offerle';

  @Select(ProductsState.getNbProducts) nbProducts$: Observable<Product[]>
}
