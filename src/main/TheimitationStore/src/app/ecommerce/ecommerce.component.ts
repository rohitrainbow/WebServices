import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  @ViewChild('productsC')
  productsC: ProductsComponent;
  
  constructor() { }

  ngOnInit() {
  }

}
