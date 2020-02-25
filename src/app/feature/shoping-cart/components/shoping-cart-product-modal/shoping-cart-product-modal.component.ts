import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShopingCartService } from '../../service/shoping-cart.service';
import { ShopingCart } from 'src/app/model/shoping-cart';

@Component({
  selector: 'app-shoping-cart-product-modal',
  templateUrl: './shoping-cart-product-modal.component.html',
  styleUrls: ['./shoping-cart-product-modal.component.css']
})
export class ShopingCartProductModalComponent implements OnInit {


  shopingCart: ShopingCart;



  constructor(
    private modelRef: MatDialogRef<ShopingCartProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private shopingCartService: ShopingCartService
  ) {

  }

  ngOnInit() {
    this.shopingCartService.getShopingCart().subscribe(
      (cart) => {
        this.shopingCart = cart;
      }
    )
  }







}
