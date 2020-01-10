import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MessagingService } from './messaging.service';
import { Subscription } from 'rxjs';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit, OnDestroy {


  public messages: any[] = [];
  private messageSubsription: Subscription;

  constructor(private messageService: MessagingService, private route: Router) {
    this.messageSubsription = this.messageService.getMessage().subscribe((messages: any) => {
      if (messages) {
        this.messages.push(messages)
      } else {
        this.messages = [];
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
}
