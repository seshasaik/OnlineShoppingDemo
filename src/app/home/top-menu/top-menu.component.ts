import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      if (user)
        this.loginUser = user.userName;

    })
  }
  loginUser: String = "";
  @Output("sideNavToggleButtonStateChange") toggleSideNavEvent = new EventEmitter();

  toggleSideNav(): void {
    console.log("toggleSideNav Clicked");
    this.toggleSideNavEvent.emit("");
  }

  logout(): void {
    this.authService.logOut();
  }

}
