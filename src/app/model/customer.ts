
import { Account } from './account';
import { UserGender } from './user-gender.enum';
import { UserState } from './user-state.enum';

export class Customer {

    customerId: String;    
    address: String;
    phone: String;
    email: String;
    state: UserState;
    account: Account;
    firstName: String;
    middelName: String;
    lastName: String;
    gender: UserGender;
    
}
