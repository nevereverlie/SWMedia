import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';


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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
      ShopCategoryComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      SocialLoginModule.initialize(getAuthServiceConfigs()),
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(routes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
