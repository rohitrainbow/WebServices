import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceService } from '../services/ecommerce.service';
import { Product } from '../model/product';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product-descr',
  templateUrl: './product-descr.component.html',
  styleUrls: ['./product-descr.component.css']
})
export class ProductDescrComponent implements OnInit {
  productId: string;
  product: Product;

  constructor(private route: ActivatedRoute, private ecommerceService: EcommerceService) {
    this.route.params.subscribe(params => {
      this.productId = params.id;
    });
  }

  ngOnInit() {
    this.loadProdDescr();
  }
  loadProdDescr() {

    this.ecommerceService.
      getProductDescr(String(this.productId)).pipe(first())
      .subscribe(
        data => {
          this.product = data; // use this variable as object
        });
  }
}
