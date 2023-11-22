import {Product} from "../models/Product";

export class AddProduct{
  static readonly type = '[Product] Add';

  constructor(public payload: Product) {
  }
}

export class DeleteProduct{
  static readonly type = '[Product] Delete';

  constructor(public payload: Product) {
  }
}

export class AddProductToCart{
  static readonly type = '[Product] AddToCart';

  constructor(public payload: Product) {
  }
}
