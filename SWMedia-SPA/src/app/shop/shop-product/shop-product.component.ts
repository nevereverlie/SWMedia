import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/_services/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {
  product: any;
  productId: number;
  constructor(public shopService: ShopService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = parseInt(this.route.snapshot.paramMap.get('productId'));
    this.GetProduct(this.productId);
  }

  GetProduct(productId: number) {
    this.shopService.GetProduct(this.route.snapshot.paramMap.get('category'), productId).subscribe(
      response => {
        this.product = response;
        console.log(this.product);
      }
    );
  }

}
