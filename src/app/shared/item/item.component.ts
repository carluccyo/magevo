import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Item } from './item.model'

@Component({
    selector: 'item-detail',
    template: `
    <div class="row item-box">

      <div class="col-sm-12 col-xs-12">

        <div class="col-sm-6 col-xs-6">

          <div class="clear"></div>

          <img src={{item.mediaUrl}} itemprop="image" alt="ciao" class="rounded-top col-sm-12 col-xs-12" />

        </div>

        <div class="col-sm-6 col-xs-6">

          <div class="time">16:13 - 12 novembre 2016</div>

          <div class="red">ciaone</div>

      </div>

      </div>

    </div>
    `,
    styles: [`

        .red {
          border: 1px solid red;
        }

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
