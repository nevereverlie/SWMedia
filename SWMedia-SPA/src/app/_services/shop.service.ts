import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:5000/api/shop/';

  constructor(private http: HttpClient) { }

  GetCategories() {
    return this.http.get(this.baseUrl + 'categories');
  }

  GetProductsFromCategory(categoryName: string) {
    return this.http.get(this.baseUrl + 'categories/' + categoryName);
  }

}
