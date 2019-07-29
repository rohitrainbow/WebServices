import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  private productsUrl = "api/products";
  private productDescrUrl = "api/product/";
  private searchedProductsUrl="api/searchedProducts/";


  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.productsUrl);
  }

  getSearchedProducts(inputCriteria) {
    return this.http.get(this.searchedProductsUrl+inputCriteria);
  }

  getProductDescr(id: string) {
    return this.http.post<any>(this.productDescrUrl + id, {}).pipe(map(product => { return product; }));
  }


}
