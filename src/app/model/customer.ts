import { UserState } from '../feature/auth/user-state.enum';
import { Account } from './account';

export class Customer {

    customerId: String;
    address: String;
    phone: String;
    email: String;
    state: UserState;    
    account: Account;
}
