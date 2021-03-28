import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import {JoinRoomComponent} from './join-room/join-room.component';

const routes: Routes = [
  {path: "chat", component: ChatComponent},
  {path: "", component: JoinRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
