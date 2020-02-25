import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { User } from '../model/user';
import { BaseAPIURLService } from '../_services/base-apiurl.service';
import { Observable, of } from 'rxjs';
import { MessagingService } from '../feature/messaging/messaging.service';
import { catchError } from 'rxjs/operators';
import { APIResponse } from '../model/apiresponse';
import { Router } from '@angular/router';
import { Message } from '../feature/messaging/message';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient, private baseApiUrl: BaseAPIURLService
    , private messageService: MessagingService, private route: Router) { }

  signUp(user: User): void {
    this.http.post(this.baseApiUrl.getURL("/sign-up"), user).pipe(
      catchError(this.errorHandler<APIResponse>("signUp", null))
    ).subscribe((apiResponse: APIResponse) => {

      let message = new Message();
      message.autoClose = true;
      message.messages = [`${apiResponse.message}`]
      this.messageService.addMessage(message);

      this.route.navigate(["login"]);
    })
  }

  private errorHandler<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      let message = new Message();
      message.autoClose = true;
      message.messages = [error.message || error]
      this.messageService.addMessage(message);
      return of(result as T);
    }
  }
}
