import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-nav',
  templateUrl: './shop-nav.component.html',
  styleUrls: ['./shop-nav.component.css']
})
export class ShopNavComponent implements OnInit {

  constructor() { }

  displayContacts: boolean;
  displayDelivery: boolean;
  displayLicense: boolean;

  ngOnInit() {
  }

  showContacts() {
    this.displayContacts = true;
  }

  showDelivery() {
    this.displayDelivery = true;
  }

  showLicense() {
    this.displayLicense = true;
  }
}
