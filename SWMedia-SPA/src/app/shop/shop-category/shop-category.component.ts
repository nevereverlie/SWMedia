import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/_services/shop.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {
  products: any;
  userId: number;
  attributes: any;
  order: any;

  constructor(public route: ActivatedRoute, public shopService: ShopService, private authService: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {
    this.userId = +this.authService.decodedToken.nameid;

    this.route.data.subscribe(data => {
      this.products = data['category'];
    });


  }

  AddToCart(productId) {
    this.order = {
      productId: productId,
      userId: this.userId,
      amount: 1
    };
    console.log(this.order);

    this.shopService.AddToOrder(this.order).subscribe((response) => {
      this.alertify.success("Added to cart");
    }, error => {
      this.alertify.error(error);
    });
  }
}

