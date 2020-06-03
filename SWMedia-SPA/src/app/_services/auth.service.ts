import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService as _AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { from } from 'rxjs';
import { AlertifyService } from './alertify.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient, private socialAuthService: _AuthService, private alertify: AlertifyService ) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'loginUser', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
          }
        })
      );
  }

  register(model:any) {
    return this.http.post(this.baseUrl + 'registerUser', model);
  }


  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  sendData(googleUser: any){
    return this.http.post(this.baseUrl + 'loginGoogleUser', googleUser)
    .pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
      })
    );
  }

  signinWithGoogle () {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider)
    .then((userData) => {
      if (userData) {
        this.decodedToken = this.jwtHelper.decodeToken(userData.idToken);
        let googleUser = {firstName: this.decodedToken.given_name,
          lastName: this.decodedToken.family_name,
          email: this.decodedToken.email};
        console.log(googleUser);
        this.sendData(googleUser).subscribe(response => {
          this.alertify.success("Successfully logged in via Google");
          console.log(response);
        });
      }
    }, error => {
      console.log(error);
    });
  }

  GetProfile(id: number) {
    return this.http.post(this.baseUrl + 'getUserProfile', id);
  }

  UpdateProfile(user: any) {
    return this.http.post(this.baseUrl + 'updateUser', user);
  }

}
