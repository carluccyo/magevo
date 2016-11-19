import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Item } from './item.model'

@Component({
    selector: 'item-vertical',
    template: `
      <div class="row item-vertical-box">
        <img src={{item.mediaUrl}} itemprop="image" alt="ciao" class="img-responsive m-l-0" />
        <div class="message">{{item.title}}</div>
      </div>
    `,
    styles: [`

        .item-desc {
            margin: 2px;
        }

        .m-l-0 {
          margin: 0;
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

        .item-vertical-box{
          border: 1px solid #006baf;
          margin-top: 10px;
          margin-bottom: 10px;
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

export class ItemVerticalComponent implements OnInit, OnDestroy {

    @Input() item: Item;

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

}
