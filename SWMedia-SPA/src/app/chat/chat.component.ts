import { Component } from "@angular/core";
import * as signalR from '@aspnet/signalr'

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent {
  _hubConnection: any;
  nick = "";
  message = "";
  messages: string[] = [];

  public sendMessage(): void {
    this._hubConnection
      .invoke('sendToAll', this.nick, this.message)
      .catch(err => console.error(err));
  }

  ngOnInit() {
    this.nick = window.prompt("Your name:", "John");

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
