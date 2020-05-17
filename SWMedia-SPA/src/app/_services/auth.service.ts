import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

constructor(private http: HttpClient ) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'loginUser', model)
    .pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    )
}

register(model:any) {
  return this.http.post(this.baseUrl + 'registerUser', model);
}

}
