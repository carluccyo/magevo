import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './home.routing';

import { HomeComponent } from './home.component';

import { Logger } from 'angular2-logger/core';

import { LocationService } from 'angular2-geolocalitation/core';

import { ItemListService } from '../../shared/item/item.list.service';
import { ItemComponent } from '../../shared/item/item.component';
import { ItemHorizontalComponent } from '../../shared/item/item.horizontal.component';
import { ItemVerticalComponent } from '../../shared/item/item.vertical.component';

import { TopBannerComponent } from './top-banner';
import {BoxArchiveComponent} from './box-archive';
import {RankingBoxComponent, RankingBoxService} from './ranking-box';

import {IMAGELAZYLOAD_DIRECTIVES, ImageLazyLoaderService, WebWorkerService} from '../../components/image-lazy-load';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        HomeComponent,
        ItemComponent,
        ItemHorizontalComponent,
        ItemVerticalComponent,
        TopBannerComponent,
        IMAGELAZYLOAD_DIRECTIVES,
        BoxArchiveComponent,
        RankingBoxComponent
    ],
    providers: [
        Logger,
        LocationService,
        ItemListService,
        ImageLazyLoaderService,
        WebWorkerService,
        RankingBoxService
    ]
})
export class HomeModule { }
