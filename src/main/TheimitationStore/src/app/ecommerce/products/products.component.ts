import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../services/ecommerce.service';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  inputCriteria: String;
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private ecommerceService: EcommerceService) {
    this.route.params.subscribe(params => {
      this.inputCriteria = params.id;
    });
  }

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

  loadSearchedProducts() {
    this.ecommerceService.getSearchedProducts(this.inputCriteria)
      .subscribe((products: any[]) => {
        this.products = products;
      }
      );
  }
}
