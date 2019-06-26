import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../services/ecommerce.service';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { CartProducts } from '../model/cart-products';
import { Cart } from '../model/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartProducts[] = [];
  cartItems: Cart[];
  constructor(private cartService: CartService, private router: Router) { }
  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (this.cartItems.length != 0)
      this.getCartProducts();
  }

  getCartProducts() {
    this.cartService.getCartProducts()
      .subscribe(cartItems => {
        this.cartProducts = JSON.parse(cartItems);
      }
      );
  }

  removeFromCart(id: string) {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    var del: number;
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id + "" == id) {
        del = i;
        break;
      }
    }
    const index: number = this.cartItems.indexOf(this.cartItems[del]);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    if (this.cartItems.length != 0)
      this.getCartProducts();
    else
      this.cartProducts = [];
  }

  checkout() {
    if (JSON.parse(localStorage.getItem('currentUser')) != null) {
      this.router.navigate(['/cart']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
