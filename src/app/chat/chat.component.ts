import {Component, OnInit} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {ChatService} from '../chat.service';
import {Imessage} from '../Imessage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messageList: any[] = new Array();

  id;

  name;

  content;

  constructor(private webSocketService: WebsocketService,
              private chatService: ChatService,
              private router: Router) {
  }


  ngOnInit(): void {

    if (window.sessionStorage.getItem('user') == null) {
      this.router.navigate(['']);
    } else {
      this.id = JSON.parse(window.sessionStorage.getItem('user')).id;
      this.name = JSON.parse(window.sessionStorage.getItem('user')).nameSendMessage;
      console.log(JSON.parse(window.sessionStorage.getItem('user')))
    }

    if (window.sessionStorage.getItem('message') != null) {
      this.messageList = JSON.parse(window.sessionStorage.getItem('message'));
    }

    let stompClient = this.webSocketService.connect();
    stompClient.connect({}, frame => {
      stompClient.subscribe('/topic/chat', data => {
        this.messageList.push(JSON.parse(data.body));
        window.sessionStorage.setItem('message', JSON.stringify(this.messageList));
      });
    });
  }


  out() {
    sessionStorage.clear();
   this.router.navigate(['']);
  }

  sendMessage() {
    let message = {
      id: this.id,
      nameSendMessage: this.name,
      content: this.content,
      time: new Date()
    };

    this.chatService.sendMessage(message).subscribe();

    this.content = '';
  }
}
