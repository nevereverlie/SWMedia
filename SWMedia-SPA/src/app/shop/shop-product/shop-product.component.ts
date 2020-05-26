import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/_services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {
  product: any;
  productId: number;
  attributes: any;
  constructor(public shopService: ShopService, public route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.productId = (+this.route.snapshot.paramMap.get('productId'));
    this.route.data.subscribe(data => {
      this.product = data['product'];
    })
    this.GetAttributes(this.productId);
  }

  GetAttributes(productId: number) {
    this.shopService.GetAttributes(this.route.snapshot.paramMap.get('category'), productId).subscribe(
      (response: any) => {
        this.attributes = response;
        console.log(this.attributes);
      }, error => {
        this.alertify.error(error);
      }
    );
  }

  AddToCart() {
    this.shopService.AddToOrder();
  }
}
