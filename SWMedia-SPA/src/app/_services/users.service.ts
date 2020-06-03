import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

baseUrl = environment.apiUrl + 'users/';

constructor(private http: HttpClient) { }

GetUser(userId: number) {
  this.http.get(this.baseUrl + userId);
}

}
