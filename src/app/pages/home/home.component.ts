import { Component, OnInit } from '@angular/core';
import { ILogger, Logger, Level } from 'angular2-logger/core';
import { PageConstant } from '../shared/page.consts';

import { ItemListService } from '../../shared/itemList.service';
import { Item } from '../../shared/item.model';
import { ItemComponent } from '../../shared/item.component';

import { LocationService, Location } from "angular2-geolocalitation/core";

@Component({
    selector: PageConstant.HOME_SELECTOR,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [Logger, ItemListService]
})
export class HomeComponent implements OnInit {

    constructor(public logger: Logger, private itemListService: ItemListService, public locationService: LocationService) { }

    title = 'List of items';

    location: Location;

    items: Item[];

    ngOnInit() {
        this.logger.debug('ItemListComponent init...');
        this.getItems();
        this.location = this.locationService.getLocation();
    }

    getItems() {
        this.itemListService.getItems().then(items => this.items = items);
    }


}
