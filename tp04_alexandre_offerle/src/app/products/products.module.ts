import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';

import {ProductListComponent} from "./product-list/product-list.component";
import {ProductsState} from "../../shared/states/products-state";
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([ProductsState]),
  ],

  declarations: [ProductListComponent, CreateProductComponent],
  exports: [ProductListComponent, CreateProductComponent],
})
export class ProductsModule {}
