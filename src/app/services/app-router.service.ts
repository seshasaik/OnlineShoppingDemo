import { Injectable } from '@angular/core';
import * as routeConfig from '../../assets/config/route-config.json';
import { UserRoutes } from '../model/UserRoutes.js';

@Injectable({
  providedIn: 'root'
})
export class AppRouterService {

  applicationRouteArray: UserRoutes[] = [];
  constructor() {
    console.log(routeConfig);
    this.applicationRouteArray = routeConfig;
  }
}
