import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../model/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input() prodObj !: Iproduct
  constructor() { }

  ngOnInit(): void {
  }

}
