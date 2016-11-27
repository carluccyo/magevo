import { Component, OnInit } from '@angular/core';
import { Logger } from 'angular2-Logger/core';


@Component({
    selector: 'box-archive',
    templateUrl: 'box-archive.component.html',
    providers: [Logger]
})
export class BoxArchiveComponent implements OnInit {

    constructor(private logger: Logger) { }

    ngOnInit() {
        this.logger.info('box archive init... ');
    }

}