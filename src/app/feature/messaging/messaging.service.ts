import { Injectable } from '@angular/core';
import { MessagingModule } from './messaging.module';
import { Observable, Subject } from 'rxjs';
import { Message } from './message';

@Injectable()
export class MessagingService {

  private messages = new Subject<Message>();

  constructor() { }

  addMessage(message: Message): void {
    this.messages.next(message);
  }

  clearMessage(): void {
    this.messages.next();
  }

  getMessage(): Observable<Message> {
    return this.messages.asObservable()
  }
}
