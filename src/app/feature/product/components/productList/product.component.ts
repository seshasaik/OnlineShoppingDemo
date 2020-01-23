import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product-service.service';
import { MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/model/product';
import { ProductFeature } from 'src/app/model/product-feature';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('moreDetailExpand',
      [
        state('collapsed', style({ height: '0px', minHeight: '0' })),
        state('expanded', style({ height: '*' })),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      ])
  ]
})
export class ProductComponent implements OnInit {

  constructor(private route: Router,
    private productService: ProductService, private activeRoute: ActivatedRoute) { }

  productsDataSource: MatTableDataSource<Product>;
  isSearchContainerOpend: boolean = false;
  columnToDisplay: string[] = ['sno', 'name', 'status', 'action'];
  expandbleRow: Product | null = null;


  ngOnInit() {
    this.productsDataSource = new MatTableDataSource();
    this.productService.listProduct().subscribe(productList => {
      this.productsDataSource.data = productList;
      this.productsDataSource._updateChangeSubscription;
    }
    );
  }

  openSearchContainer(): void {
    this.isSearchContainerOpend = !this.isSearchContainerOpend;
  }

  addProduct(): void {
    this.route.navigate(['..', 'add'], {
      relativeTo: this.activeRoute
    });
  }

  sortFeatures(features: ProductFeature[]) {
    return features.sort((feature1, feature2) => feature1.order - feature2.order)
  }

}
