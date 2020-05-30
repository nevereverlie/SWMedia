import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopService } from 'src/app/_services/shop.service';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-shop-checkout',
  templateUrl: './shop-checkout.component.html',
  styleUrls: ['./shop-checkout.component.css']
})
export class ShopCheckoutComponent implements OnInit {

  cities1: SelectItem[];

  cities2: City[];

  selectedCity1: City;

  selectedCity2: City;



  constructor(public shopService: ShopService) {
    // SelectItem API with label-value pairs
    this.cities1 = [
      {label: 'Select City', value: null},
      {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
      {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
      {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
  ];

  // An array of cities
    this.cities2 = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit() {
  }

  loadAddreses() {
    this.shopService.loadAddreses().subscribe(response => {
      console.log(response);
    });
  }

  loadCities() {
    this.shopService.loadCities().subscribe(response => {
      console.log(response);
    });
  }

}
