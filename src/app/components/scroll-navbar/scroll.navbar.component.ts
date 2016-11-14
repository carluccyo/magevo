import { Component, OnInit, HostListener } from '@angular/core';
import { Logger } from 'angular2-logger/core';

import { WindowRef } from '../../shared/window/WindowRef';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'top-scroll-navbar',
    template: `

    <nav class="navbar navbar-default navbar-fixed-top" [class.top-nav-collapse]="isClassVisible">

      <div class="container">

        <div class="navbar-header">

          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <a class="navbar-brand" [routerLink]="['']">Project name</a>

        </div>

        <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">

          <ul class="nav navbar-nav">

            <li><a [routerLink]="['']">Home</a></li>
            <li><a [routerLink]="['about']">About</a></li>
            <li><a  [routerLink]="['dashboard']">Dashboard</a></li>

            <!--<li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>-->

          </ul>

          <!--<ul class="nav navbar-nav navbar-right">
            <li><a href="../navbar/">Default</a></li>
            <li><a href="../navbar-static-top/">Static top</a></li>
            <li class="active"><a href="./">Fixed top <span class="sr-only">(current)</span></a></li>
          </ul>-->

        </div><!--/.nav-collapse -->
      </div>
    </nav>


    `,
    styles: [`
        .navbar {
          padding: 30px 0 ;
          -webkit-transition: background .5s ease-in-out,padding .5s ease-in-out;
          -moz-transition: background .5s ease-in-out,padding .5s ease-in-out;
          transition: background .5s ease-in-out,padding .5s ease-in-out;
        }

        .top-nav-collapse {
            padding: 0;
        }
      `
    ]
})
export class ScrollNavbarComponent implements OnInit {

    isClassVisible: false;

    constructor(private logger: Logger, private _window : WindowRef) {}

    ngOnInit() {
      this.logger.info('init navbar for window', this._window.nativeWindow);

      Observable.fromEvent(this._window, 'resize')
      .debounceTime(200)
      .subscribe((event) => {
        this.logger.info('resize', event);
      });
    }

    @HostListener('window:scroll', ['$event'])
    clickout(event) {

      this.logger.debug('HostListener scroll', this._window.nativeWindow.pageYOffset);

      if(this._window.nativeWindow.pageYOffset > 70){
        this.isClassVisible = true;
      }else{
        this.isClassVisible = false;
      }

    }

}
