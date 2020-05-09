import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import {
   SocialLoginModule,
   AuthServiceConfig,
   GoogleLoginProvider
 } from 'angularx-social-login';
 import { getAuthServiceConfigs } from './socialLoginConfig';

@NgModule({
   declarations: [
      AppComponent,
      AuthComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      SocialLoginModule.initialize(getAuthServiceConfigs())
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
