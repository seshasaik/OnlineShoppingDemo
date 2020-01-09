import { Injectable } from '@angular/core';
import { MessagingModule } from './messaging.module';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessagingService {

  private messages = new Subject<any>();

  constructor() { }

  addMessage(message: any): void {
    this.messages.next(message);
  }

  clearMessage(): void {
    this.messages.next();
  }

  getMessage(): Observable<any> {
    return this.messages.asObservable()
  }
}
