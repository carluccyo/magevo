import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'top-banner',
    templateUrl: 'top.banner.component.html',
    styles: [` 
        .topBanner{
            margin-top: 5px;
            margin-bottom: 5px;
            padding: 2px;
        }

        .alignImgCenter{
             margin: 0 auto;
        }
    `]
})
export class TopBannerComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
