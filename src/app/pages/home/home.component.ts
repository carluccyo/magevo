import { Component, OnInit } from '@angular/core';
import { ILogger, Logger, Level } from 'angular2-logger/core';
import { PageConstant } from '../shared/page.consts';

import { ItemListService } from '../../shared/itemList.service';
import { Item } from '../../shared/item.model';
import { ItemComponent } from '../../shared/item.component';

@Component({
    selector: PageConstant.HOME_SELECTOR,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [Logger, ItemListService]
})
export class HomeComponent implements OnInit {

    constructor(public logger: Logger, private itemListService: ItemListService){ }

    title = 'List of items';

    items: Item[];

    ngOnInit() {
        this.logger.debug('ItemListComponent init...');
        this.getItems();
    }

    getItems() {
        this.itemListService.getItems().then(items => this.items = items);
    }


}
