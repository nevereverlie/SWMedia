import { Injectable } from '@angular/core';
import { Product } from '../../_models/product';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ShopService } from '../../_services/shop.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductResolver implements Resolve<Product> {

  constructor(private shopService: ShopService, private router: Router, private alertify: AlertifyService) { }

  resolve(route: ActivatedRouteSnapshot) : Observable<Product> {
    return this.shopService.GetProduct(route.params['category'], route.params['productId']).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/categories']);
        return of(null);
      })
    )
  }
}
