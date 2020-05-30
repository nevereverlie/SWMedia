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
    return this.http.post(this.baseUrl + 'removeFromOrder', orderId);
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

  loadAddreses() {
    const model = {
      apiKey: 'f956a97c3fd659cf311638241d823258',
      modelName: 'Address',
      calledMethod: 'searchSettlements',
      methodProperties: {
        CityName: 'київ',
        Limit: 5
      }
    };
    return this.http.post('http://api.novaposhta.ua/v2.0/json/Address/searchSettlements', model);
  }

  loadCities() {
    const model = {
      modelName: 'Address',
      calledMethod: 'getCities',
      methodProperties: {
      //Ref: 'ebc0eda9-93ec-11e3-b441-0050568002cf'
      },
      apiKey: 'f956a97c3fd659cf311638241d823258'
    };

    return this.http.post('http://api.novaposhta.ua/v2.0/json/Address/getCities', model);
  }
}
