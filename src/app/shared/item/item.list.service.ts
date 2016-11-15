import { Injectable } from '@angular/core';
import { Item } from './Item.model';
import { ITEMS } from './mock-item';
import {HORIZONTAL_ITEMS} from './mock-horizontal-item';

@Injectable()
export class ItemListService {

    constructor() { }

    getItems() {
        return Promise.resolve(ITEMS);
    }

    getItemsSlowly() {
        return new Promise<Item[]>(
            resolve => setTimeout(() => resolve(HORIZONTAL_ITEMS), 5000) // 2 seconds
        );
    }

}
