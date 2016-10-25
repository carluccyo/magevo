import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'top-navbar',
    template: `
    <nav class="navbar navbar-light navbar-dark bg-primary bg-faded">

      <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>

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

          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="responsiveNavbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="responsiveNavbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->

        </ul>

      </div>

    </nav>

    `
})
export class NavbarComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}
