import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AppRouterService } from 'src/app/services/app-router.service';
import { UserRoutes } from 'src/app/model/UserRoutes';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

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
