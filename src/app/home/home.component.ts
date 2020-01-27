import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserRoutes } from '../model/UserRoutes';
import { MatSidenav, MatAccordion, MatExpansionPanelHeader } from '@angular/material';
import { AppRouterService } from '../_services/app-router.service';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// , AfterViewInit
export class HomeComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;


  path = location.pathname;
  currentPanelId: string = "";



  // @ViewChild(MatAccordion, { static: true }) matAccordationView: MatAccordion;
  // private appRouterService: AppRouterService,
  constructor(
    private router: ActivatedRoute) {

  }

  ngOnInit() {

  }

  // ngAfterViewInit() {
  //   console.log(this.path);
  //   let matchedExpansionPanel = this.matAccordationView._headers.filter((item: MatExpansionPanelHeader) => {
  //     let expansionPanelNotfound: boolean = true;

  //     item.panel._body.nativeElement.querySelectorAll("mat-list-item a").forEach((value: Element) => {
  //       expansionPanelNotfound = value.getAttribute("href") !== this.path;
  //     })

  //     return expansionPanelNotfound;
  //   });

  //   if (matchedExpansionPanel.length) {
  //     this.currentPanelId = matchedExpansionPanel[0]._getPanelId();
  //     console.log(this.currentPanelId)
  //   }
  //   // matchedExpansionPanel[0].panel.open()

  // }

  toggleSideMenuContainer($event: any) {
    this.sidenav.toggle();
  }

}
