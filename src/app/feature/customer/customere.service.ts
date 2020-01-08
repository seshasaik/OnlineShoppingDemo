import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPIURLService } from 'src/app/services/base-apiurl.service';
import { CustomerModule } from './customer.module';
import { Customer } from 'src/app/model/customer';
import { Observable, from, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: CustomerModule
})
export class CustomereService {
  constructor(private http: HttpClient, private baseApiURLService: BaseAPIURLService) {



  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseApiURLService.getURL("")).pipe(
      tap(customerArray => console.log("Customers founded " + customerArray.length)),
      catchError(this.errorHandler<Customer[]>('getAllCustomers', []))
    );
  }

  saveCustomer(customer: Customer): void {
    this.http.post<Customer>(this.baseApiURLService.getURL(''), customer, {
      headers: new HttpHeaders({
        contentType: "application/json"
      })
    }).subscribe()
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      console.error(`${operation} failed, Details ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

