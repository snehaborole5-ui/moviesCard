import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Iproduct } from '../model/product.model';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  productsArr : Array<Iproduct> = []

  constructor(
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    this._productService.fetchProducts()
      .subscribe({
        next : res => {
          this.productsArr = res
        },
        error : err => {
          console.log(err)
        }
      })
  }

}
