import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ModalModule} from 'ngx-bootstrap/modal';
import {OwlModule} from 'ngx-owl-carousel'
import { SelectDropDownModule } from 'ngx-select-dropdown'

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
import { FilmsComponent, SafePipe } from './films/films.component';
import { ChatComponent } from './chat/chat.component';
import { routes } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ShopNavComponent } from './shop/shop-nav/shop-nav.component';
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
import { OrderResolver } from './shop/_resolvers/order.resolver';
import { ShopCheckoutComponent } from './shop/shop-checkout/shop-checkout.component';
import { FilmsService } from './_services/films.service';
import { ShopFooterComponent } from './shop/shop-footer/shop-footer.component';
import { ProfileComponent } from './profile/profile.component';

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
      ShopCategoriesComponent,
      ShopCategoryComponent,
      ShopProductComponent,
      ShopCartComponent,
      ShopCheckoutComponent,
      SafePipe,
      ShopFooterComponent,
      ProfileComponent
   ],
   imports: [
      BrowserModule,
      DropdownModule,
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
      NgxNumberSpinnerModule,
      AccordionModule,
      FieldsetModule,
      ScrollPanelModule,
      DialogModule,
      ButtonModule,
      BreadcrumbModule,
      ModalModule.forRoot(),
      OwlModule,
      SelectDropDownModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      ShopService,
      FilmsService,
      ProductResolver,
      CategoriesResolver,
      CategoryResolver,
      OrderResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
