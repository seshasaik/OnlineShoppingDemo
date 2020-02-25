import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPIURLService } from 'src/app/_services/base-apiurl.service';
import { Inventory } from 'src/app/model/inventory';
import { Observable } from 'rxjs';

@Injectable()
export class InventoryService {

  base_inventory_root_api = "/api/inventory"
  constructor(private http: HttpClient,
    private baseApiURLService: BaseAPIURLService
  ) { }

  getInventory(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.baseApiURLService.getURL(this.base_inventory_root_api))
  }
}
