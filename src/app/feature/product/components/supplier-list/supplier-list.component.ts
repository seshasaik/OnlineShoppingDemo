import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Supplier } from 'src/app/model/supplier';
import { SelectionModel } from '@angular/cdk/collections';
import { SupplierService } from 'src/app/feature/supplier/service/supplier.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {


  supplierDataSource: MatTableDataSource<Supplier> = new MatTableDataSource();

  columnsToDisplay = ['select', 'name', 'regNumber', 'mobile'];

  height: number = window.outerHeight;

  @Input("isOpen")
  modelVisibilityStatus: boolean = false;


  @Input("existedSupplierIds")
  existingSupplierIds: string[] = [];

  @Output()
  closeModel: EventEmitter<Supplier[]> = new EventEmitter<Supplier[]>()

  constructor(private supplierService: SupplierService) { }
  selection: SelectionModel<Supplier>

  ngOnInit() {

    const subscriber = (supplierList) => {
      this.supplierDataSource.data = supplierList;
      this.supplierDataSource._updateChangeSubscription()
    }
    if (this.existingSupplierIds.length)
      this.supplierService.getSuppliersByExculdeExisted(this.existingSupplierIds).subscribe(subscriber);
    else
      this.supplierService.getSuppliers().subscribe(subscriber);
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<Supplier>(allowMultiSelect, initialSelection);
    

  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.supplierDataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.supplierDataSource.data.forEach(row => this.selection.select(row));
  }


  dismissModel() {
    this.closeModel.emit([]);
  }

  addSelectedSupplier() {
    this.closeModel.emit(this.selection.selected);
  }



}
