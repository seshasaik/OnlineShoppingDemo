import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineItem } from 'src/app/model/line-item';
import { BehaviorSubject, Observable, Observer, Subscription } from 'rxjs';
import { ShopingCart } from 'src/app/model/shoping-cart';
import { BaseAPIURLService } from 'src/app/_services/base-apiurl.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Product } from 'src/app/model/product';

@Injectable()
export class ShopingCartService {


  shopingCart: BehaviorSubject<ShopingCart>

  baseShopingCartApi: string;

  constructor(private httpClient: HttpClient,
    private baseApiUrlService: BaseAPIURLService,
    private authSerive: AuthService) {

    this.shopingCart = new BehaviorSubject(null)
    this.authSerive.currentUser.subscribe((user) => {
      this.baseShopingCartApi = `/customer/${user.customerId}/cart`;
      this.loadShopingCart();
    })

  }

  public registerToShopingCart(observer: Observer<ShopingCart>): Subscription {
    return this.shopingCart.subscribe(observer);
  }

  public loadShopingCart() {
    this.httpClient.get<ShopingCart>(this.baseApiUrlService.getURL(this.baseShopingCartApi)).subscribe((customerShopingCart) => {
      this.shopingCart.next(customerShopingCart);
    })
  }

  public getShopingCart(): Observable<ShopingCart> {
    return this.shopingCart.asObservable();
  }

  public addProductToCart(product: Product) {

    this.getShopingCart().subscribe((cart: ShopingCart) => {
      let item = new LineItem();
      item.id = cart.items.length + 1;
      item.quantity = 1;
      item.price = 2
      cart.items.push(item);

      this.shopingCart.next(cart);
    }).unsubscribe();

  }

  public updateProductQuantity(product: Product, quantity: number, id: number) {
    this.getShopingCart().subscribe((cart: ShopingCart) => {

      cart.items = cart.items.map((lineItem: LineItem) => {
        if (lineItem.id === id) {
          lineItem.quantity = quantity
        }
        return lineItem;
      });

      this.shopingCart.next(cart);
    }).unsubscribe();
  }


  public removeProductFromCart(id: number) {
    this.getShopingCart().subscribe((cart: ShopingCart) => {

      cart.items = cart.items.filter((lineItem: LineItem) => {
        return lineItem.id !== id;
      });

      this.shopingCart.next(cart);
    }).unsubscribe();
  }


}
