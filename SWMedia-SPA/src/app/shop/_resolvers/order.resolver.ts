import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ShopService } from '../../_services/shop.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from 'src/app/_models/order';
import { AuthService } from 'src/app/_services/auth.service';

@Injectable()
export class OrderResolver implements Resolve<Order[]> {

  constructor(private shopService: ShopService, private router: Router, private alertify: AlertifyService, private authService: AuthService) { }

  resolve(route: ActivatedRouteSnapshot) : Observable<Order[]> {
    return this.shopService.GetOrder(+this.authService.decodedToken.nameid).pipe(
      catchError((error) => {
        console.log(error);
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/shop']);
        return of(null);
      })
    )
  }
}

