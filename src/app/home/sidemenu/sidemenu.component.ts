import { Component, OnInit } from '@angular/core';
import { AppRouterService } from 'src/app/services/app-router.service';
import { UserRoutes } from 'src/app/model/UserRoutes';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  userRoutes: UserRoutes[];

  constructor(private appRouterService: AppRouterService) {
    this.userRoutes = appRouterService.applicationRouteArray;
  }

  currentSelection: number = -1;

  expandSideMenu(indx: number) {
    this.currentSelection = this.currentSelection === indx ? -1 : indx;
  }

  ngOnInit() {
  }

}
