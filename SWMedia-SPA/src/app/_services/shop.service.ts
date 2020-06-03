import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { STATUS_CODES } from 'http';
import { ok } from 'assert';

@Injectable({
  providedIn: "root",
})
export class ShopService {
  baseUrl = environment.apiUrl + "shop/";

  constructor(private http: HttpClient) {}

  AddToOrder(order: any) {
    return this.http.post(this.baseUrl + "addToOrder", order);
  }

  RemoveFromOrder(orderId: number) {
    return this.http.post(this.baseUrl + "removeFromOrder", orderId);
  }

  GetCategories() {
    return this.http.get(this.baseUrl + "categories");
  }

  GetProductsFromCategory(categoryName: string) {
    return this.http.get(this.baseUrl + "categories/" + categoryName);
  }

  GetProduct(categoryName: string, productId: number) {
    return this.http.get(
      this.baseUrl + "categories/" + categoryName + "/" + productId
    );
  }

  GetAttributes(categoryName: string, productId: number) {
    return this.http.get(
      this.baseUrl +
        "categories/" +
        categoryName +
        "/" +
        productId +
        "/attributes"
    );
  }

  GetOrder(userId: number) {
    return this.http.get(this.baseUrl + "cart/" + userId);
  }

  DisposeOrder(userId: number) {
    return this.http.post(this.baseUrl + 'disposeOrder', userId);
  }

  loadAddreses() {
    const model = {
      apiKey: "f956a97c3fd659cf311638241d823258",
      modelName: "Address",
      calledMethod: "searchSettlements",
      methodProperties: {
        CityName: "київ",
        Limit: 5,
      },
    };
    return this.http.post(
      "https://api.novaposhta.ua/v2.0/json/Address/searchSettlements",
      model
    );
  }

  loadCities() {
    const model = {
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {},
      apiKey: "f956a97c3fd659cf311638241d823258",
    };

    return this.http.post(
      "https://api.novaposhta.ua/v2.0/json/Address/getCities",
      model
    );
  }

  loadWarehouses(city: any) {
    const currentCity = city;
    console.log(currentCity);
    const model = {
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        Language: "ru",
        CityName: currentCity,
      },
      apiKey: "f956a97c3fd659cf311638241d823258",
    };

    return this.http.post(
      "https://api.novaposhta.ua/v2.0/json/AddressGeneral/getWarehouses",
      model
    );
  }

  checkout() {
    return this.http.get('https://angular.io');
  }
    /*const model = {
      apiKey: "f956a97c3fd659cf311638241d823258",
      modelName: "InternetDocument",
      calledMethod: "save",
      methodProperties: {
        NewAddress: "1",
        PayerType: "Sender",
        PaymentMethod: "Cash",
        CargoType: "Cargo",
        VolumeGeneral: "0.1",
        Weight: "10",
        ServiceType: "WarehouseWarehouse",
        SeatsAmount: "1",
        Description: "абажур",
        Cost: "500",
        CitySender: "8d5a980d-391c-11dd-90d9-001a92567626",
        Sender: "5ace4a2e-13ee-11e5-add9-005056887b8d",
        SenderAddress: "d492290b-55f2-11e5-ad08-005056801333",
        ContactSender: "613b77c4-1411-11e5-ad08-005056801333",
        SendersPhone: "380991234567",
        RecipientCityName: "Киев",
        RecipientArea: "",
        RecipientAreaRegions: "",
        RecipientAddressName: "1",
        RecipientHouse: "",
        RecipientFlat: "",
        RecipientName: "Тест Тест Тест",
        RecipientType: "PrivatePerson",
        RecipientsPhone: "380991234567",
        DateTime: "23.09.2016",
      },
    };

    return this.http.post('https://api.novaposhta.ua/v2.0/en/save_warehouse/json/', model);
  }*/
}
