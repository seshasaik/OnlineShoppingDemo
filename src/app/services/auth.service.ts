import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseAPIURLService } from './base-apiurl.service';
import { Customer } from '../model/customer';
import { catchError } from 'rxjs/operators';
import { MessagingService } from '../feature/messaging/messaging.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<Customer>;
  currentUser: Observable<Customer>;

  constructor(private http: HttpClient, private router: Router, private baseAPIUrlServie: BaseAPIURLService, private messageService: MessagingService) {
    let user = localStorage.getItem("user");
    this.currentUserSubject = new BehaviorSubject<Customer>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    if (user == null || typeof user == "undefined") {
      this.router.navigate(['login']);
    } else {
      this.currentUserSubject.next(JSON.parse(user));
      this.router.navigate(['dashboard']);
    }


  }

  isUserLogin(): boolean {
    let isExist: boolean = false;
    this.currentUser.subscribe(x => isExist = x != null && typeof x != "undefined");
    return isExist;
  }

  setUserInfo(customer: Customer): void {
    localStorage.setItem("user", JSON.stringify(customer));
    this.currentUserSubject.next(customer);
  }

  login(user: User): void {
    this.http.post<Customer>(this.baseAPIUrlServie.getURL("/customer/login"), user, {
      headers: new HttpHeaders({ 'contentType': 'application/json' })
    }).pipe(
      catchError(this.errorHandler<Customer>('login', null))
    ).subscribe((customer) => {

      this.setUserInfo(customer);
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

      this.messageService.addMessage(`${operation} failed, Details ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
