import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/_services/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.css']
})
export class ShopCategoriesComponent implements OnInit {
  categories: any;
  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.categories = data['categories'];
    })
  }
/*
  GetCategories() {
    this.shopService.GetCategories().subscribe(response => {
      this.categories = response;
    });
  }
*/
}
