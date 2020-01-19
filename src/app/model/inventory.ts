import { Product } from './product';
import { ProductStatus } from './enums/product-status.enum';
import { ProductStock } from './product-stock';

export class Inventory {
    id: string;
    product: Product;
    stock: ProductStock;
    status: ProductStatus;
}
