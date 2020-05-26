import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/_services/shop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { NgxNumberSpinnerComponent } from 'ngx-number-spinner';
import { tokenGetter } from 'src/app/app.module';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  order: any;
  totalSum: number = 0;

  constructor(private shopService: ShopService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    console.log(+this.authService.decodedToken.nameid);

    this.GetOrder();
  }

  GetOrder() {
    return this.shopService.GetOrder(+this.authService.decodedToken.nameid).subscribe(
      response => {
        this.order = response;
        this.order.forEach(element => {
          this.totalSum += element.product.price;
        });
        console.log(this.order);
      }
    ), error => {
      console.log(error);
    }
  }

  ChangeTotalSum(id, amount, price) {
    console.log(amount);
    for (let i = 0; i < this.order.length; i++) {
      if (this.order[i].productId == id) {
        console.log(this.order[i].amount);
        if (amount >= this.order[i].amount) {
          this.AddToTotal(price);
          this.order[i].amount++;
        }
        else {
          this.RemoveFromTotal(price);
          this.order[i].amount--;
        }
      }
    };
  }

  AddToTotal(price) {
    this.totalSum += price;
    console.log(this.totalSum);
  }
  RemoveFromTotal(price) {
    this.totalSum -= price;
    console.log(this.totalSum);
  }
}
