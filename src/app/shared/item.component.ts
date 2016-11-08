import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Item } from './item.model'

@Component({
    selector: 'item-detail',
    template: `
    <article class = "item-detail">
      <h1>{{item.title}}</h1>
      <div class="item-media"><img src={{item.mediaUrl}} /></div>
      <div><span class="badge">{{item.id}}</span>{{item.description}}</div>
    </article>
    `,
    styles: [`
    .item-detail {
    }
    .text {
      position: relative;
      top: -3px;
      padding: 1em 1em 0 1em;
    }
    .item-detail .item-media {
    }
    .item-detail .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 1em 1em 0 1em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class ItemComponent implements OnInit, OnDestroy {

    @Input() item: Item;

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
