import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Item } from './item.model'

@Component({
    selector: 'item-detail',
    template: `
    <div class="row item-box">
      <div class="col-sm-12 col-xs-12">

        <div class=" item-media">
          <div class=""></div>
          <img src={{item.mediaUrl}} itemprop="image" alt="ciao" class="rounded-top" />
        </div>

        <div>.col-sm-10</div>
      </div>

    </div>
    `,
    styles: [`
      .item-box{
        border: 2px solid #ddd;
        margin: 2px;
        padding: 5px;
      }

      .item-media{
        width: 36%;
        float: left;
        position: relative;
      }

      .item-media img{
        width: 100%;
        display: block;
        z-index: 2;
      }

      `]
})

export class ItemComponent implements OnInit, OnDestroy {

    @Input() item: Item;

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
