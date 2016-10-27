import { Component, OnInit } from '@angular/core';
import { ILogger, Logger, Level } from 'angular2-logger/core';

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [Logger]
})
export class HomeComponent implements OnInit {

    constructor(public logger: Logger) { }

    ngOnInit() {

      this.logger.group();
      this.logger.error('This is a priority level 1 error message...');
      this.logger.warn('This is a priority level 2 warning message...');
      this.logger.info('This is a priority level 3 info message...');
      this.logger.debug('This is a priority level 4 debug message...');
      this.logger.log('This is a priority level 5 log message...');
      this.logger.groupEnd();
    }


}
