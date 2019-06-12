import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  private productsUrl = "api/products";
  private productDescrUrl = "api/product/";

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.productsUrl);
  }

  getProductDescr(id: string) {
    return this.http.post<any>(this.productDescrUrl + id, {}).pipe(map(product => { return product; }));
  }
}
