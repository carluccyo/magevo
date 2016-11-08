import { Component, OnInit } from '@angular/core';
import { Logger } from 'angular2-logger/core';

@Component({
    selector: 'top-navbar',
    template: `
    <nav class="navbar navbar-light navbar-dark bg-primary bg-faded">

      <button class="navbar-toggler hidden-lg-up"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation">
      </button>

      <div class="collapse navbar-toggleable-md" id="navbarResponsive">

        <a class="navbar-brand"  [routerLink]="['']" >Navbar</a>

        <ul class="nav navbar-nav">

          <li class="nav-item active">
            <a class="nav-link"  [routerLink]="['']">Home <span class="sr-only">(current)</span></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" [routerLink]="['about']">About</a>
          </li>

          <li class="nav-item">
            <a class="nav-link"  [routerLink]="['dashboard']">Dashboard</a>
          </li>

        </ul>

      </div>

    </nav>

    `
})
export class NavbarComponent implements OnInit {

    constructor(private logger: Logger) { }

    ngOnInit() {

    }

}
