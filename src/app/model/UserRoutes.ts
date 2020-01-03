import { Roles } from '../roles.enum';

export class UserRoutes {

    isActiveRoute: boolean = false;
    routeDisplayName: String = "";
    subRoutes: UserRoutes[] = [];
    routeAccessFor: Roles[] = [];
    route: string = "";
}