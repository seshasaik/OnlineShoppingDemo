import { ProductStatus } from './enums/product-status.enum';

export class ProductStock {
    batchNo: string;
    quantity: number;
    mrp: Float64Array;
    status: ProductStatus;
}
