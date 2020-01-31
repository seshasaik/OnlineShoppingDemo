import { Product } from './product';

export class PurchaseOrderItem {
    product: Product;

    orderedQty: number;

    receivedQty: number;

    pendingQty: number;

    cost: Number;

    total: Number;
}
