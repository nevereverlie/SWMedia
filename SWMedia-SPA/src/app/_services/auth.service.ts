import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService as _AuthService, GoogleLoginProvider } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient, private socialAuthService: _AuthService ) { }

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

signinWithGoogle () {
  let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

  this.socialAuthService.signIn(socialPlatformProvider)
  .then((userData) => {
    if (userData) {
      localStorage.setItem('token', userData.idToken);
      this.decodedToken = this.jwtHelper.decodeToken(userData.idToken);
      return this.http.post(this.baseUrl + 'loginGoogleUser', userData); //add this method in the API
    }
  }, error => {
    console.log(error);
  });
}


}
