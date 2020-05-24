import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/_services/shop.service';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {
  products: any;
  constructor(public route: ActivatedRoute, public shopService: ShopService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.products = data['category'];
    })
  }
/*
  GetProductsFromCategory() {
    this.shopService.GetProductsFromCategory(this.route.snapshot.paramMap.get('category')).subscribe(response => {
      this.products = response;
      console.log(response);
    });
  }
*/
}
