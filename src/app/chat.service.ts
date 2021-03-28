import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url = 'https://phuocpro-springboot.herokuapp.com';

  constructor(private http: HttpClient) { }

  sendMessage(value: any) {
    return this.http.post(this.url + '/send-message', value);
  }

  joinRoom(value: any) {
    return this.http.get(this.url + '/join-room?name=' + name);
  }
}
