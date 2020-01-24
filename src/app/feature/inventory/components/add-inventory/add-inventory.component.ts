import { Component, OnInit } from '@angular/core';
import { ProductViewModalComponent } from '../product-view-modal/product-view-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css'],
  entryComponents: [
    ProductViewModalComponent
  ]
})
export class AddInventoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.dialog.open(ProductViewModalComponent, {
      height: '300px',
      width: '500px'
    }).beforeClosed().subscribe((result) => {
      console.log(result);
    })
  }

}
