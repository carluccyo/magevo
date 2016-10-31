import { Injectable } from '@angular/core';
import { Item } from './Item.model'
import { ITEMS } from './mock-item'

@Injectable()
export class ItemListService {
    constructor() { }

    getItems() {
        return Promise.resolve(ITEMS);
    }

    getItemsSlowly() {
        return new Promise<Item[]>(
              resolve => setTimeout(() => resolve(ITEMS), 2000) // 2 seconds
        );
    }

}
