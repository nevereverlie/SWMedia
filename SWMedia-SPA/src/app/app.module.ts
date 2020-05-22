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
import { HeaderComponent } from './header/header.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopComponent } from './shop/shop.component';
import { FilmsComponent } from './films/films.component';
import { ChatComponent } from './chat/chat.component';
import { routes } from './app-routing.module'; 

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      RegisterComponent,
      ShopComponent,
      FilmsComponent,
      ChatComponent
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
