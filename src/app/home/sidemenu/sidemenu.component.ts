import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AppRouterService } from 'src/app/_services/app-router.service';
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
  setPannelId(indx: number) {
    localStorage.setItem('activePanelId', indx.toString());
  }


  ngOnInit() {
    if (localStorage.getItem('activePanelId'))
      this.currentSelection = parseInt(localStorage.getItem('activePanelId'));
  }

}

