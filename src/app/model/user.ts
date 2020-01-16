import { Customer } from './customer';

export class User extends Customer {

    userName: String = "";
    password: String = "";
    oldPassword: String = "";
    selfRegistration: boolean = false;

}
