import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';

import {ProductStateModel} from "./product-state-model";
import {AddProduct, AddProductToCart, DeleteProduct} from "../actions/product-action";
import {Product} from "../models/Product";

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: [],
  },
})
@Injectable()
export class ProductsState {
  @Selector()
  static getNbProducts(state: ProductStateModel){
    return state.products.length;
  }

  static getNbProductsInCart(state: ProductStateModel): number{
    return state.products.filter((p) => p.isInCart).length;
  }

  @Selector()
  static getProductList(state: ProductStateModel){
    return state.products;
  }

  @Selector()
  static getProductsInCart(state: ProductStateModel) {
    return state.products.filter((p) => p.isInCart);
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    patchState({
      products: [...state.products, payload],
    });
  }

  @Action(DeleteProduct)
  del(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: DeleteProduct
  ) {
    const state = getState();
    patchState({
      products: state.products.filter(
        (x) => !(payload.name == x.name && payload.description == x.description)
      ),
    });
  }

  @Action(AddProductToCart)
  update(
    { getState, patchState}: StateContext<ProductStateModel>,
    { payload}: AddProductToCart
  ){
    const state = getState();
    patchState({
      products: state.products.map((p) => {
        if (p.name == payload.name && p.description == payload.description) {
          return {
            ...p,
            isInCart: true,
          };
        } else {
          return p;
        }
      }
      ),
    })
  }
}
