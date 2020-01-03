import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPIURLService } from 'src/app/services/base-apiurl.service';
import { Observable } from 'rxjs';
import { Customer } from '../../model/customer';
import { User } from '../../model/user';



@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private baseAPIURlService: BaseAPIURLService) {

  }

  validateUserCredentilas(user: User): Observable<Customer> {
    const servieURl = this.baseAPIURlService.getURL('/customer/login');
    const data = JSON.stringify(user);
    return this.http.post<Customer>(servieURl, data);
  }
}
