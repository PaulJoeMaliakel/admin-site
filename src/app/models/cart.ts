import { Product } from './product';
import { ThrowStmt } from '@angular/compiler';
import { threadId } from 'worker_threads';

export class Cart {
    id: number;
    productId: number;
    productName: string;
    count: number;
    price: number;
    shopId: number;
    userId: number;

    constructor(id: number, product: Product, count=1){
        this.id = id;
        this.productId =product.id;
        this.productName = product.name;
        this.price = product.price;
        this.count = count;
        this.shopId = product.restaurantId;
        // this.userId = localStorage.getItem(userId);
    }
}
