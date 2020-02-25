import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../service/inventory.service';
import { MatTableDataSource } from '@angular/material';
import { Inventory } from 'src/app/model/inventory';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css', '../../../../global/_styles/common-styles.css']
})
export class ViewInventoryComponent implements OnInit {

  inventoryDataSource: MatTableDataSource<Inventory>;
  columnsToDisplay: string[] = ['sno', 'productName', 'stock', 'cost', 'status',];

  constructor(private inventoryService: InventoryService) {
    this.inventoryDataSource = new MatTableDataSource([]);
  }




  ngOnInit() {
    this.inventoryService.getInventory().subscribe((inventory) => {
      this.inventoryDataSource.data = inventory;
      this.inventoryDataSource._updateChangeSubscription();
    })
  }

}
