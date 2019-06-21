import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../services/ecommerce.service';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  inputCriteria: String;
  products: Product[] = [];
  cartItems: string[];
  wishlistItems: string[];
  constructor(private ecommerceService: EcommerceService, private navbarComponent: NavbarComponent) {
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
  updateCart(id: string) {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    var i = 0;
    for (i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i] == id)
        break;
    }
    if (i == this.cartItems.length) {
      this.cartItems[this.cartItems.length] = id;
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
