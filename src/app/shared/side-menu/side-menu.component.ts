import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggleSideMenuContainer($event: any) {
    this.sidenav.toggle();
  }
}
