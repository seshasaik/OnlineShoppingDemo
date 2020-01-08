import { Component, OnInit, ViewChild } from '@angular/core';
import { UserRoutes } from '../model/UserRoutes';
import { MatSidenav } from '@angular/material';
import { AppRouterService } from '../services/app-router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  userRoutes: UserRoutes[];

  constructor(private appRouterService: AppRouterService) {
    this.userRoutes = appRouterService.applicationRouteArray;
  }

  ngOnInit() {

  }

  toggleSideMenuContainer($event: any) {
    this.sidenav.toggle();
  }

}
