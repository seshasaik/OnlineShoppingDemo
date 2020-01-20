import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Supplier } from 'src/app/model/supplier';

@Component({
  selector: 'app-product-supplier',
  templateUrl: './product-supplier.component.html',
  styleUrls: ['./product-supplier.component.css']
})
export class ProductSupplierComponent implements OnInit {


  @Input("supplier")
  supplier: Supplier;



  @Output("remove")
  remove: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  removeProduct() {
    this.remove.emit(null);
  }

}
