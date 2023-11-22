import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngxs/store";
import {Product} from "../../../shared/models/Product";
import {AddProduct} from "../../../shared/actions/product-action";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.productForm = this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      isInCart: false
    });
  }
  ngOnInit(): void {
  }

  addProduct() {
    let name: string = this.productForm.value['name'];
    let description: string = this.productForm.value['description'];
    let price: number = this.productForm.value['price'];
    let isInCart: boolean = this.productForm.value['isInCart'];

    let product: Product;

    product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    product.isInCart = isInCart;

    console.log(product);

    this.productForm = this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      isInCart: false,
    });

    this.store.dispatch(new AddProduct(product));
  }

}
