import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = environment.apiUrl + 'shop/';

  constructor(private http: HttpClient) { }

  AddToOrder(order: any) {
    return this.http.post(this.baseUrl + 'addToOrder', order);
  }

  RemoveFromOrder(orderId: number) {
    return this.http.post(this.baseUrl + 'removeFromOrder/' + orderId, orderId);
  }

  GetCategories() {
    return this.http.get(this.baseUrl + 'categories');
  }

  GetProductsFromCategory(categoryName: string) {
    return this.http.get(this.baseUrl + 'categories/' + categoryName);
  }

  GetProduct(categoryName: string, productId: number) {
    return this.http.get(this.baseUrl + 'categories/' + categoryName + '/' + productId);
  }

  GetAttributes(categoryName: string, productId: number) {
    return this.http.get(this.baseUrl + 'categories/' + categoryName + '/' + productId + '/attributes');
  }

  GetOrder(userId: number) {
    return this.http.get(this.baseUrl + 'cart/' + userId);
  }

}
