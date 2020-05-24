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
  constructor(public shopService: ShopService, public route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.productId = (+this.route.snapshot.paramMap.get('productId'));
    this.route.data.subscribe(data => {
      this.product = data['product'];
    })
  }
/*
  GetProduct(productId: number) {
    this.shopService.GetProduct(this.route.snapshot.paramMap.get('category'), productId).subscribe(
      (product: Product) => {
        this.product = product;
        console.log(this.product);
      }, error => {
        this.alertify.error(error);
      }
    );
  }
*/
}
