import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-nav',
  templateUrl: './shop-nav.component.html',
  styleUrls: ['./shop-nav.component.css']
})
export class ShopNavComponent implements OnInit {

  constructor() { }

  displayContacts: boolean;

  ngOnInit() {
  }

  showContacts() {
    this.displayContacts = true;
  }
}
