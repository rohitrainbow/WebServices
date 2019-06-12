import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../services/ecommerce.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.ecommerceService.getAllProducts()
      .subscribe((products: any[]) => {
        this.products = products;
      }
      );
  }
}
