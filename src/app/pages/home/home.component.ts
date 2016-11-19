import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { PageConstant } from '../shared/page.consts';

import { Item } from '../../shared/item/item.model';
import { ItemListService } from '../../shared/item/item.list.service';
import { LocationService, Location } from "angular2-geolocalitation/core";

@Component({
  selector: PageConstant.HOME_SELECTOR + PageConstant.SUFFIX,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    Logger,
    ItemListService
  ],
  animations: [
    trigger('animationState', [
      state('collapsed, void', style({ borderBottom: '0' })),
      state('expanded, void', style({ boxShadow: '8px 8px 3px #006bae' })),
      transition('collapsed <=> expanded', [
        animate(1000)
      ])
    ]),
    trigger('flyHorizontalOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1300)
      ]),
      transition('* => void', [
        animate(1300, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('flyVerticalOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(1500)
      ]),
      transition('* => void', [
        animate(1500, style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(public logger: Logger, private itemListService: ItemListService, public locationService: LocationService) { }

  title = 'List of items';

  location: Location;

  items: Item[];
  horizontalItems: Item[];

  ngOnInit() {
    this.logger.debug('HomeComponent init...');
    this.getItems();
    this.location = this.locationService.getLocation();
  }

  getItems() {
    this.itemListService.getItems().then(items => this.items = items);
    this.itemListService.getItemsSlowly().then(horizontalItems => this.horizontalItems = horizontalItems);
  }

  expand(_item: Item) {
    _item.animationState = 'expanded';
  }

  collapse(_item: Item) {
    _item.animationState = 'collapsed';
  }


}
