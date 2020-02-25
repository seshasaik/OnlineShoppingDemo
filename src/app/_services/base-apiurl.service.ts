import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class BaseAPIURLService {
  private baseUrl: String = environment.apiUrl;
  constructor() { }

  getURL(serviceURL: string): string {
    return this.baseUrl + serviceURL;
  }
}
