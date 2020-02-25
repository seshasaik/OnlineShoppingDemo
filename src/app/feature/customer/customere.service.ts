import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAPIURLService } from 'src/app/_services/base-apiurl.service';
import { CustomerModule } from './customer.module';
import { Customer } from 'src/app/model/customer';
import { Observable, from, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { MessagingService } from '../messaging/messaging.service';
import { Message } from '../messaging/message';

@Injectable()
export class CustomereService {
  constructor(private http: HttpClient, private baseApiURLService: BaseAPIURLService, private messageService: MessagingService) {

  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseApiURLService.getURL("/customer")).pipe(
      tap(customerArray => console.log("Customers founded " + customerArray.length)),
      catchError(this.errorHandler<Customer[]>('getAllCustomers', []))
    );
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.baseApiURLService.getURL(`/customer/${id}`)).pipe(
      catchError(this.errorHandler<Customer>('getCustomerById', null))
    )
  }

  saveCustomer(customer: Customer): void {

    this.http.post<Customer>(this.baseApiURLService.getURL('/customer'), customer, {
      headers: new HttpHeaders({
        contentType: "application/json"
      }),
    }).pipe(
      catchError(this.errorHandler<Customer>('saveCustomer', null))
    ).subscribe((str) => {
      if (str !== null && typeof str)
        console.log(`message from server ${str}`)

      let message = new Message();
      message.autoClose = true;
      message.messages = [`Customer ${customer.firstName + ' ' + customer.lastName} added successfully`]
      this.messageService.addMessage(message);
      setTimeout(() => {
        this.messageService.clearMessage();
      }, 3000);
    })
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

      let message = new Message();
      message.autoClose = true;
      message.messages = [`${operation} failed, Details ${error.message}`]
      this.messageService.addMessage(message);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

