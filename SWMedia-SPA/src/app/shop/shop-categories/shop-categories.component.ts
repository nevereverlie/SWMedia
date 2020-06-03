import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/_services/shop.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.css']
})
export class ShopCategoriesComponent implements OnInit {
  categories: any;
  home: MenuItem;
  items: MenuItem[];
  constructor(private shopService: ShopService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.categories = data['categories'];
    });
    console.log(this.categories);
    this.items = [
      {label:'Categories'}
    ];
    this.home = {icon: 'pi pi-home', routerLink: '../../main/'};
  }
}
