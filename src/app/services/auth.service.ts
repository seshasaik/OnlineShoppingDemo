import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { isNull } from 'util';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    let user = localStorage.getItem("user");
    this.currentUserSubject = new BehaviorSubject<User>(null);
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

  setUserInfo(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  login(user : User):void{
    this.setUserInfo(user);
    this.router.navigate(['dashboard']);
  }

  logOut():void{
    this.setUserInfo(null);
    this.router.navigate(["login"]);
  }

}
