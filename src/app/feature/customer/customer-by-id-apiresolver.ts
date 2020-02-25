import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomereService } from './customere.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerByIdAPIResolver implements Resolve<Observable<Customer>>{
    constructor(private customerService: CustomereService) { }
    resolve(route: ActivatedRouteSnapshot) {
        const customerId = route.paramMap.get("id");
        return this.customerService.getCustomerById(customerId);
    }
}
