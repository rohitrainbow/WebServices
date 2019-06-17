import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcommerceService } from '../services/ecommerce.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: Product[] = [];
  searchCriteria: String;
  constructor(private router: Router,private route: ActivatedRoute,
    private ecommerceService: EcommerceService) {
    this.route.params.subscribe(params => {
      this.searchCriteria = params.id;
    });
  }

  ngOnInit() {
    this.loadSearchedProducts();
  }

  loadSearchedProducts() {
    this.ecommerceService.getSearchedProducts(this.searchCriteria)
      .subscribe((products: any[]) => {
        this.products = products;
      }
      );
  }

  search(input): void {
    input='/home/'+input;
    this.router.navigate([input]);
  }
}
