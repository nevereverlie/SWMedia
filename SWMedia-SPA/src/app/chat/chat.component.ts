import { Component } from "@angular/core";
import * as signalR from '@aspnet/signalr'
import { AuthService } from '../_services/auth.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent {
  _hubConnection: any;
  nick: string;
  message = "";
  messages: string[] = [];

  constructor(private usersService: UsersService, private authService: AuthService) {}

  public sendMessage(): void {
    this._hubConnection
      .invoke('sendToAll', this.nick, this.message)
      .catch(err => console.error(err));

  }

  ngOnInit() {
    console.log(this.authService.decodedToken);
    this.nick = this.authService.decodedToken.unique_name;

    this._hubConnection = new signalR.HubConnectionBuilder()
                          .withUrl("http://localhost:5000/signalr")
                          .build();

    this._hubConnection
      .start()
      .then(() => console.log("Connection started!"))
      .catch((err) => console.log("Error while establishing connection :(" + err)
      );

    this._hubConnection.on(
      "sendToAll",
      (nick: string, receivedMessage: string) => {
        const text = `${nick}: ${receivedMessage}`;
        this.messages.push(text);
      }
    );
  }
}
