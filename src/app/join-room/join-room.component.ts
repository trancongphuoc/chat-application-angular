import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {

  name: string;
  id: number;

  constructor(private router: Router,
              private chatService: ChatService) { }

  ngOnInit(): void {
  }

  saveNameToStorage(value: any) {
    window.sessionStorage.setItem('user', JSON.stringify(value));
  }

  joinRoom() {
    this.id = Math.floor(Math.random() * 100000);

    let message = {
      id: this.id,
      nameSendMessage: this.name,
      content: null}

    this.saveNameToStorage(message);

    this.chatService.sendMessage(message).subscribe();
    this.router.navigate(['/chat']);
  }

}
