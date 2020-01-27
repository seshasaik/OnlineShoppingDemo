import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onlineShopingDemo1';
  authStatus: boolean = true;
  constructor(authService: AuthService) {
    this.authStatus = authService.isUserLogin();
  }
  ngOnInit() {

  }
}
