import { Injectable } from '@angular/core';
import routeConfig from '../../assets/config/route-config.json';
import { UserRoutes } from '../model/UserRoutes.js';
import { AuthService } from './auth.service.js';

@Injectable({
  providedIn: 'root'
})
export class AppRouterService {

  applicationRouteArray: UserRoutes[] = [];
  constructor(private authService : AuthService) {
    // console.log(JSON.stringify(routeConfig));
    this.authService.currentUser.subscribe((user) => {
      user.roles
    })
    this.applicationRouteArray = routeConfig;
  }
}
