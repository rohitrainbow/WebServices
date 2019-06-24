import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl="http://localhost/api/cartProducts/";

  constructor(private http: HttpClient) { }

  getCartProducts(){
    return this.http.get(this.cartUrl+JSON.parse(localStorage.getItem('cartItems')));
  }

  updateCart(id: string){
    
  }
}
