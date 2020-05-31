import { Component } from "@angular/core";
import * as signalR from '@aspnet/signalr'
import { AuthService } from '../_services/auth.service';
import { UsersService } from '../_services/users.service';
import { ChatService } from '../_services/chat.service';
import { Message } from '../_models/message';

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
  isCurrentUser: false;

  constructor(private chatService: ChatService, private authService: AuthService) {}

  public sendMessage(): void {
    this._hubConnection
      .invoke('sendToAll', this.nick, this.message)
      .catch(err => console.error(err));

  }

  ngOnInit() {
    console.log(this.authService.decodedToken);

    this.chatService.GetMessages().subscribe(response => {
      for (var message in response) {
        this.messages.push(response[message].text);
      }
    });

    this.nick = this.authService.decodedToken.unique_name;

    this._hubConnection = new signalR.HubConnectionBuilder()
                          .withUrl("http://localhost:5000/signalr")
                          .build();

    this._hubConnection
      .start()
      .then(() => console.log("Connection started!"))
      .catch((err) => console.log("Error while establishing connection :(" + err)
      );

    this._hubConnection.on("sendToAll", (nick: string, receivedMessage: string) => {
        const text = `${receivedMessage}`;
        this.messages.push(text);
      }
    );
  }
}
