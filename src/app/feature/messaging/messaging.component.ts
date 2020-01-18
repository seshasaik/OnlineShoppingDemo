import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MessagingService } from './messaging.service';
import { Subscription } from 'rxjs';
import { RouterEvent, Router } from '@angular/router';
import { Message } from './message';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit, OnDestroy {


  public message: Message;
  private messageSubsription: Subscription;

  constructor(private messageService: MessagingService, private route: Router) {
    
    this.messageSubsription = this.messageService.getMessage().subscribe((messages: Message) => {
      if (messages) {
        this.message = messages;
        this.checkIsAutoClosable();
      } else {
        this.message = null;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.messageSubsription.unsubscribe();
  }

  closeModel() {
    this.messageService.clearMessage();
  }

  checkIsAutoClosable(): void {
    if (this.message.autoClose) {
      setTimeout(() => {
        this.closeModel();
      }, this.message.timeinMills);
    }
  }
}
