import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcommerceService } from '../services/ecommerce.service';
import { Product } from '../model/product';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: Product[] = [];
  searchCriteria: String;
  cart:Cart;
  cartItems: Cart[];
  wishlistItems: string[];
  constructor(private router: Router, private route: ActivatedRoute,
    private ecommerceService: EcommerceService) {
    this.route.params.subscribe(params => {
      this.searchCriteria = params.id;
      this.loadSearchedProducts();
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
    input = '/home/' + input;
    this.router.navigate([input]);
  }

  updateCart(id: string) {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    var i = 0;
    for (i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id+"" == id)
        break;
    }
    if (i == this.cartItems.length) {
      this.cart=new Cart();
      this.cart.id=+id;
      this.cart.quantity=1;
      this.cartItems[this.cartItems.length] = this.cart;
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

    }
  }

  updateWishlist(id: string) {
    this.wishlistItems = JSON.parse(localStorage.getItem('wishlistItems'));
    var i = 0;
    for (i = 0; i < this.wishlistItems.length; i++) {
      if (this.wishlistItems[i] == id)
        break;
    }
    if (i == this.wishlistItems.length) {
      this.wishlistItems[this.wishlistItems.length] = id;
      localStorage.setItem('wishlistItems', JSON.stringify(this.wishlistItems));
    }
  }
}
