import { Injectable } from '@angular/core';
import { Product } from '../../_models/product';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ShopService } from '../../_services/shop.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../../_models/category';

@Injectable()
export class CategoryResolver implements Resolve<Category> {

  constructor(private shopService: ShopService, private router: Router, private alertify: AlertifyService) { }

  resolve(route: ActivatedRouteSnapshot) : Observable<Category> {
    return this.shopService.GetProductsFromCategory(route.params['category']).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/categories']);
        return of(null);
      })
    )
  }
}
