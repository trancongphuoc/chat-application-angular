import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import SockJs from 'sockjs-client';
import Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private http: HttpClient) { }

  public connect() {
    let socket = new SockJs(`https://phuocpro-springboot.herokuapp.com/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;
  }

}
