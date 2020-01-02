import { Roles } from '../roles.enum';

export class UserRoutes {

    isActiveRoute: boolean = false;
    routeDisplayName: string = "";
    subRoutes: UserRoutes[] = [];
    routeAccessFor: Roles[] = [];
    route: String = "";
}