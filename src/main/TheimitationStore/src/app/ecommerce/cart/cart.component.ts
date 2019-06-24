import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../services/ecommerce.service';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  cartItems: string[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (this.cartItems.length != 0)
      this.getCartProducts();
  }

  getCartProducts() {
    this.cartService.getCartProducts()
      .subscribe((products: any[]) => {
        this.cartProducts = products;
      }
      );
  }

  removeFromCart(id: string) {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const index: number = this.cartItems.indexOf(id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    if (this.cartItems.length != 0)
      this.getCartProducts();
    else
      this.cartProducts = [];
  }
}
