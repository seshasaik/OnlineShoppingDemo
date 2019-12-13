import { Supplier } from './supplier';

export class Product {
    id: String;
    name: String;
    suppliers: Supplier[] = [];

    constructor(id: String, name: String) {
        this.id = id;
        this.name = name;
    }


}
