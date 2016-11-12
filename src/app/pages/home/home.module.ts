import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './home.routing';

import { HomeComponent } from './home.component';

import { Logger } from 'angular2-logger/core';

import { LocationService, Location } from "angular2-geolocalitation/core";

import { ItemListService } from '../../shared/item/item.list.service';
import { ItemComponent } from '../../shared/item/item.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        HomeComponent,
        ItemComponent
    ],
    providers: [
        Logger,
        LocationService,
        ItemListService
    ]
})
export class HomeModule { }
