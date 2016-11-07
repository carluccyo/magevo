import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './home.routing';

import { HomeComponent} from './home.component';


import { ILogger, Logger, Level } from 'angular2-logger/core';

import {LocationService, Location} from "angular2-geolocalitation/core";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    Logger,
    LocationService
  ]
})
export default class HomeModule {}
