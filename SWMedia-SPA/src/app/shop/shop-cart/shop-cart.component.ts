import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/_services/shop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { NgxNumberSpinnerComponent } from 'ngx-number-spinner';
import { tokenGetter } from 'src/app/app.module';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  order: any;
  totalPrice: number = 0;
  userId: number;

  constructor(private shopService: ShopService, private route: ActivatedRoute, private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    console.log(+this.authService.decodedToken.nameid + ' - userId');
    this.userId = +this.authService.decodedToken.nameid;
    this.route.data.subscribe(data => {
      this.order = data['order'];
    });

    this.CalculateTotalSum();
  }

  CalculateTotalSum() {
    this.totalPrice = 0;
    this.order.forEach(item => {
      this.totalPrice += item.product.price;
    });
    console.log(this.totalPrice);
  }

  ChangeTotalPrice(id, amount, price) {
    for (let i = 0; i < this.order.length; i++) {
      if (this.order[i].productId == id) {
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
    this.totalPrice += price;
    console.log(this.totalPrice);
  }
  RemoveFromTotal(price) {
    this.totalPrice -= price;
    console.log(this.totalPrice);
  }

  RemoveFromCart(orderId, price, productId) {
    console.log(orderId);
    this.shopService.RemoveFromOrder(orderId).subscribe(
      response => {
        this.alertify.success('Removed from cart');

        console.log(response);
        
        this.order = response;
        //var rowToRemove = document.getElementById('row-' + orderId);
        //rowToRemove.remove();

        // this.ChangeTotalPrice(productId, 0, price);
        this.CalculateTotalSum();
      }, error => {
        this.alertify.error(error);
        console.log(error);
      }
    );
  }


}
