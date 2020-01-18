import { Customer } from './customer';
import { Role } from './role';

export class User extends Customer {

    userName: String = "";
    password: String = "";
    oldPassword: String = "";
    selfRegistration: boolean = false;
    token:string=""
    roles : Role[] = [];
}
