import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _messages: Message[] = [];

  get messages() {
    return this._messages;
  }

  constructor() { }

  addMessage(message: Message) {
    this._messages = [...this._messages, message];
  }
}
