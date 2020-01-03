import { Injectable } from '@angular/core';
import routeConfig from '../../assets/config/route-config.json';
import { UserRoutes } from '../model/UserRoutes.js';

@Injectable({
  providedIn: 'root'
})
export class AppRouterService {

  applicationRouteArray: UserRoutes[] = [];
  constructor() {
    console.log(JSON.stringify(routeConfig));
    this.applicationRouteArray = routeConfig;
  }
}
