import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'wsb-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  @Input()
  userName = '';

  message = '';

  get messages(): Message[] {
    return this.chatService.messages;
  }

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  addMessage() {
    this.chatService.addMessage({
      author: this.userName,
      text: this.message
    });

    this.message = '';
  }

}
