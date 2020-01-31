import { PurchaseOrderItem } from './purchase-order-item';
import { Supplier } from './supplier';
import { PurchaseOrderStatus } from './enums/purchase-order-status.enum';

export class PurchaseOrder {

    id: string;
    purchaseOrderCode: string;
    status: PurchaseOrderStatus
    cratedDate: Date;
    worth: number;
    items: PurchaseOrderItem[];
    supplierId: String;
    supplier: Supplier;
    userName: string;

}
