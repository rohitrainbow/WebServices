import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = "http://localhost/api/cartProducts/";

  constructor(private http: HttpClient) { }

  getCartProducts() {
    return this.http.post(this.cartUrl, JSON.parse(localStorage.getItem('cartItems')),
     { responseType: 'text' }).pipe(map(cartProducts => {return cartProducts;}));
  }

  updateCart(id: string) {

  }
}
