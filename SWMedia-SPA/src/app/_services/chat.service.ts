import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

baseUrl = environment.apiUrl + 'chat/';

constructor(private authService: AuthService, private http: HttpClient) { }

GetMessages() {
  return this.http.get(this.baseUrl + 'getMessages');
}

GetMessage(messageId: number) {
  return this.http.get(this.baseUrl + 'getMessage/' + messageId);
}


}
