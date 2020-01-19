import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseAPIURLService } from './base-apiurl.service';
import { catchError } from 'rxjs/operators';
import { MessagingService } from '../feature/messaging/messaging.service';
import { Message } from '../feature/messaging/message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router, private baseAPIUrlServie: BaseAPIURLService, private messageService: MessagingService) {
    let user = localStorage.getItem("user");
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    if (user == null || typeof user == "undefined") {
      this.router.navigate(['login']);
    } else {
      this.currentUserSubject.next(JSON.parse(user));
    }


  }

  isUserLogin(): boolean {
    let isExist: boolean = false;
    this.currentUser.subscribe(x => isExist = x != null && typeof x != "undefined");
    return isExist;
  }

  setUserInfo(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  login(user: User): void {
    this.http.post<User>(this.baseAPIUrlServie.getURL("/login"), user, {
      headers: new HttpHeaders({ 'contentType': 'application/json' })
    }).pipe(
      catchError(this.errorHandler<User>('login', null))
    ).subscribe((user) => {
      
      this.setUserInfo(user);
      this.router.navigate(['dashboard']);
    })

  }

  logOut(): void {
    this.setUserInfo(null);
    this.router.navigate(["login"]);
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
      console.error(error); // log to console instead
      let message = new Message();
      message.autoClose = true;
      message.messages = [`${operation} failed, Details ${error.message}`]
      this.messageService.addMessage(message);
      

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
