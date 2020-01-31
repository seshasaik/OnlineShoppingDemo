
import { PurchaseOrder } from './purchase-order';
import { PurchaseOrderItem } from './purchase-order-item';

export class GoodsReceiptNote {
    id: string;
    GRNCode: string;
    purchaseOrder: PurchaseOrder;
    worth: Number;
    goodsReceiptItems: PurchaseOrderItem[];
    purchaseOrderId: string;
    createdOn: Date;
    receivedUser: string;
}
