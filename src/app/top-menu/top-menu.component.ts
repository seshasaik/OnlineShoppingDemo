import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginUser: String = "";
  @Output("sideNavToggleButtonStateChange") toggleSideNavEvent = new EventEmitter();

  toggleSideNav(): void {
    console.log("toggleSideNav Clicked");
    this.toggleSideNavEvent.emit("");
  }
}
