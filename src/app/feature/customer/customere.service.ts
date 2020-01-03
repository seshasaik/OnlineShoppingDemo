import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPIURLService } from 'src/app/services/base-apiurl.service';
import { CustomerModule } from './customer.module';

@Injectable({
  providedIn: CustomerModule
})
export class CustomereService {
  constructor(private http: HttpClient, private baseApiURLService: BaseAPIURLService) { }
}
