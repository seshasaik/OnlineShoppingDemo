import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/model/product';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-product-view-modal',
  templateUrl: './product-view-modal.component.html',
  styleUrls: ['./product-view-modal.component.css']
})
export class ProductViewModalComponent implements OnInit {

  constructor(private modalRef: MatDialogRef<ProductViewModalComponent>) { }

  supplierDataSource: MatTableDataSource<Product>;

  selection: SelectionModel<Product>;

  columnsToDisplay: string[] = ['select', 'name', 'description'];

  ngOnInit() {
    this.supplierDataSource = new MatTableDataSource([]);
    this.selection = new SelectionModel<Product>(true, []);
  }

  dismissModel() {
    this.modalRef.close();
  }


  addSelectedSupplier() {
    this.modalRef.close(this.selection.selected);
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

}


