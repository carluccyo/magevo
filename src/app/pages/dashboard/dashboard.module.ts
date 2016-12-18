import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';
import { ChartComponent } from './charts/chart.component';

import { Logger } from 'angular2-logger/core';
import { LocationService } from 'angular2-geolocalitation/core';



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        DashboardComponent,
        ChartComponent
    ],
    providers: [
        Logger,
        LocationService
    ]
})
export class DashboardModule { }
