import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { BaseAPIURLService } from 'src/app/services/base-apiurl.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/model/user';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MessagingService } from '../../messaging/messaging.service';
import { APIResponse } from 'src/app/model/apiresponse';
import { Message } from '../../messaging/message';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient,
    private baseAPIService: BaseAPIURLService,
    private authService: AuthService,
    private messageService: MessagingService) {


  }

  // Profile service api

  getProfile(): Observable<User> {
    return this.http.get<User>(this.baseAPIService.getURL("/profile"));
  }

  saveProfile(user: User): void {
    const subscribe = this.http.post(this.baseAPIService.getURL("/profile"), user)
      .pipe(catchError(this.errorHandler<APIResponse>("saveProfile", null)))
      .subscribe((apiresponse: APIResponse) => {
        if (apiresponse) {
          let message = new Message();
          message.autoClose = true;
          message.timeinMills = 1000 * 5;
          message.messages = [apiresponse.message.toString()]
          this.messageService.addMessage(message);
        }

        subscribe.unsubscribe()
      })
  }


  //Change password API

  changePasword(user:User):Observable<APIResponse>{
    return this.http.post<APIResponse>(this.baseAPIService.getURL("/change-password"), user)
    .pipe(catchError(this.errorHandler<APIResponse>("changePasword", null)));
    
  }


  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead
      let message = new Message();
      message.autoClose = true;
      message.messages = [`${operation} failed, Details ${error.error.message}`]
      this.messageService.addMessage(message);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
