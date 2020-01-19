import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product-service.service';
import { MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: Router,
    private productService: ProductService) { }

  products: MatTableDataSource<Product>;
  isSearchContainerOpend: boolean = false;
  column :string[] = []
  ngOnInit() {
    this.productService.listProduct().subscribe(productList =>
      this.products = new MatTableDataSource(productList)
    );
  }

  openSearchContainer(): void {
    this.isSearchContainerOpend = !this.isSearchContainerOpend;
  }

  addProduct(): void {
    this.route.navigate([{ outlets: { home: ['product', 'add'] } }]);
  }

}
