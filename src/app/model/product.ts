import { Supplier } from './supplier';
import { ProductStatus } from './enums/product-status.enum';
import { ProductFeature } from './product-feature';

export class Product {
    id: String;
    name: String;
    description: string;
    features: ProductFeature[];
    suppliers: Supplier[] = [];
    staus: ProductStatus
}
