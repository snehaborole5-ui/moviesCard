import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   PRODUCT_BASE_URL = environment.PRODUCT_BASE_URL
   PRODUCT_URL = `${this.PRODUCT_BASE_URL}/products`
  constructor(
    private _http : HttpClient
  ) { }

  fetchProducts() : Observable<Iproduct[]>{
    return this._http.get<Iproduct[]>(this.PRODUCT_URL)
  }
}
