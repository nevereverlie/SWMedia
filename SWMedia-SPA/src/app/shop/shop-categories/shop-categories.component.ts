import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/_services/shop.service';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.css']
})
export class ShopCategoriesComponent implements OnInit {
  categories: any;
  constructor(public shopService: ShopService) { }

  ngOnInit() {
    this.GetCategories();
  }

  GetCategories() {
    this.shopService.GetCategories().subscribe(response => {
      console.log(response);
      this.categories = response;
    });
  }
}
