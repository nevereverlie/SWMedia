import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
   SocialLoginModule,
   AuthServiceConfig,
   GoogleLoginProvider
 } from 'angularx-social-login';
import { getAuthServiceConfigs } from './socialLoginConfig';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ShopComponent } from './shop/shop.component';
import { FilmsComponent } from './films/films.component';
import { ChatComponent } from './chat/chat.component';
import { routes } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ShopNavComponent } from './shop/shop-nav/shop-nav.component';
import { FilmsNavComponent } from './films/films-nav/films-nav.component';
import { ShopCategoriesComponent } from './shop/shop-categories/shop-categories.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';
import { ShopProductComponent } from './shop/shop-product/shop-product.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { ShopService } from './_services/shop.service';
import { ProductResolver } from './shop/_resolvers/product.resolver';
import { CategoriesResolver } from './shop/_resolvers/categories.resolver';
import { CategoryResolver } from './shop/_resolvers/category.resolver';
import { ShopCartComponent } from './shop/shop-cart/shop-cart.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      ShopComponent,
      FilmsComponent,
      ChatComponent,
      RegisterComponent,
      HeaderComponent,
      ShopNavComponent,
      FilmsNavComponent,
      ShopCategoriesComponent,
      ShopCategoryComponent,
      ShopProductComponent,
      ShopCartComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      SocialLoginModule.initialize(getAuthServiceConfigs()),
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(routes),
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      }),
      NgxNumberSpinnerModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      ShopService,
      ProductResolver,
      CategoriesResolver,
      CategoryResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
