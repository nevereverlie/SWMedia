import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShopService } from "src/app/_services/shop.service";
import { AlertifyService } from "src/app/_services/alertify.service";

@Component({
  selector: "app-shop-checkout",
  templateUrl: "./shop-checkout.component.html",
  styleUrls: ["./shop-checkout.component.css"],
})
export class ShopCheckoutComponent implements OnInit {
  currentCity: any;
  cities: any;

  warehouses: string[];
  currentWarehouse: string;

  model: any = {};

  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    height: "auto", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: "Select", // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    //limitTo: options.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: "No results found!", // text to be displayed when no items are found while searching
    searchPlaceholder: "Search", // label thats displayed in search input,
    searchOnKey: "name", // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  };

  constructor(
    public shopService: ShopService,
    private alertifyService: AlertifyService
  ) {
    this.cities = ["Киев", "Харьков", "Львов", "Одесса", "Полтава"];
  }

  ngOnInit() {}

  loadAddreses() {
    this.shopService.loadAddreses().subscribe((response) => {
      console.log(response);
    });
  }

  loadCities() {
    this.shopService.loadCities().subscribe((response) => {
      console.log(response);
    });
  }

  loadWarehouses(city: any) {
    this.warehouses = [];
    this.shopService.loadWarehouses(city).subscribe((response) => {
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          const element = response[key];
          for (let i = 0; i < element.length; i++) {
            for (const [key, value] of Object.entries(element[i])) {
              if (key == "DescriptionRu") {
                this.warehouses = [...this.warehouses, value.toString()];
              }
            }
          }
        }
      }
    });
    console.log(this.warehouses);
  }

  checkout() {
    this.shopService.checkout().subscribe(
      (response) => {
        this.alertifyService.success("Congratulations!");
      },
      (error) => {
        this.alertifyService.success("Congratulations!");
      }
    );
  }
}
