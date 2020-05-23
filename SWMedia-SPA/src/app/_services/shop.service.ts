import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = environment.apiUrl + 'shop/';

  constructor(private http: HttpClient) { }

  GetCategories() {
    return this.http.get(this.baseUrl + 'categories');
  }

  GetProductsFromCategory(categoryName: string) {
    return this.http.get(this.baseUrl + 'categories/' + categoryName);
  }

  GetProduct(categoryName: string, productId: number)
  {
    return this.http.get(this.baseUrl + 'categories/' + categoryName + '/' + productId);
  }

}
