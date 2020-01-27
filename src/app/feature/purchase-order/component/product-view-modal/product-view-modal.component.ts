import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/model/product';
import { SelectionModel } from '@angular/cdk/collections';
import { PurchaseOrderService } from '../../service/purchase-order.service';


@Component({
  selector: 'app-product-view-modal',
  templateUrl: './product-view-modal.component.html',
  styleUrls: ['./product-view-modal.component.css']
})
export class ProductViewModalComponent implements OnInit {

  constructor(private modalRef: MatDialogRef<ProductViewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public supplierId: string,
    private purchaseOrderService: PurchaseOrderService) { }

  productDataSource: MatTableDataSource<Product>;

  selection: SelectionModel<Product>;

  columnsToDisplay: string[] = ['select', 'name', 'description'];

  ngOnInit() {
    this.productDataSource = new MatTableDataSource([]);
    this.selection = new SelectionModel<Product>(true, []);
    let subsriber = this.purchaseOrderService.getProducts(this.supplierId).subscribe(
      (productList: Product[]) => {
        this.productDataSource.data = productList;
        this.productDataSource._updateChangeSubscription();
      }, () => {
        subsriber.unsubscribe();
      }
    )
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
    const numRows = this.productDataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.productDataSource.data.forEach(row => this.selection.select(row));
  }

}


