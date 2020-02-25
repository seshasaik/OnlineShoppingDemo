import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from 'src/app/model/apiresponse';
import { BaseAPIURLService } from 'src/app/_services/base-apiurl.service';
import { Observable, of } from 'rxjs';
import { MessagingService } from '../../messaging/messaging.service';
import { catchError, switchMap } from 'rxjs/operators';
import { Message } from '../../messaging/message';
import { Supplier } from 'src/app/model/supplier';

@Injectable()
export class SupplierService {

  constructor(private http: HttpClient, private baseApiService: BaseAPIURLService, private messaingServie: MessagingService) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.baseApiService.getURL("/supplier"));
  }

  getSuppliersByExculdeExisted(suppliersIds: string[]): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.baseApiService.getURL("/supplier/filterd"), {
      params: {
        "supplierIds": suppliersIds.join(",")
      }

    });
  }

  addSupplier(supplier: Supplier): Observable<boolean> {
    return this.http.post(this.baseApiService.getURL("/supplier"), supplier, {
      responseType: 'text'
    }).pipe(
      switchMap<string, Observable<boolean>>((val: string): Observable<boolean> => {
        let message = new Message();
        message.messages.push("supplier saved sccessfully");
        message.timeinMills = 5 * 1000;
        this.messaingServie.addMessage(message);
        return of<boolean>(true);
      }),
      catchError(this.errorHandler<boolean>("add supplier", false))
    );
  }


  private errorHandler<T>(operation: string = "operation", result?: T) {
    return (error: any) => {
      let message = new Message();
      message.messages.push(`Operation ${operation} failed Details ${error.message || error.toString()}`);
      message.timeinMills = 5 * 1000;
      this.messaingServie.addMessage(message);

      return of(result as T)
    }
  }
}
