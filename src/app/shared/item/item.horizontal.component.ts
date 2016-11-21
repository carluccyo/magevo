import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Item } from './item.model';

@Component({
    selector: 'item-horizontal',
    template: `
      <div class="row item-box">
        <img src={{item.mediaUrl}} itemprop="image" alt="ciao" class="img-responsive" />
        <div class="message">{{item.title}}</div>
      </div>
    `,
    styles: [`

        .item-desc{
            margin: 2px;
        }

        .time {
          text-align: left;
          font-size: 0.75em !important;
          color: #006bae;
          margin:5px;
        }

        .time {
            display: block;
            font-size: 12px;
            font-family: Roboto, Arial, Helvetica, sans-serif;
        }

        .time {
          border: 0 none;
          font-size: 100%;
          margin: 0;
          padding: 0;
          vertical-align: baseline;
          font-family: Roboto, Arial, Helvetica, sans-serif;
        }

        .clear {
          clear: both;
        }

        .item-box{
          border: 3px solid #006baf;
          margin: 0;
          padding: 1px;
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

export class ItemHorizontalComponent implements OnInit, OnDestroy {

    @Input() item: Item;

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
