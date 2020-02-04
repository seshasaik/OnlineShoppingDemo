import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from '../../service/supplier.service';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css','../../../../global/_styles/common-styles.css']
})
export class SupplierComponent implements OnInit {

  supplierDataSource: MatTableDataSource<Supplier>
  columnsToDisplay : string[] = ['sno', 'name', 'regno', 'mobile', 'address', 'action']
  constructor(private supplierService: SupplierService) {
    this.supplierDataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.supplierService.getSuppliers().subscribe((suppliers) => {
      this.supplierDataSource.data = suppliers
    });
  }

}
