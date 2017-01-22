import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AboutComponent } from './pages/about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ScrollNavbarComponent } from './components/scroll-navbar/scroll.navbar.component';

import { DashboardModule } from './pages/dashboard/dashboard.module';

import { Logger, Level } from 'angular2-logger/core';
import { LocationService } from 'angular2-geolocalitation/core';

import { PagesModule } from './pages/pages.module';
import { HomeModule } from './pages/home/home.module';

import { WindowRef } from './shared/window/WindowRef';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    PagesModule,
    HomeModule,
    DashboardModule,
    routing
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    ScrollNavbarComponent
  ],
  providers: [
    ApiService,
    Logger,
    LocationService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public appRef: ApplicationRef, public logger: Logger) {
    this.initLogger();
  }


  initLogger() {
    let logLevel = Level.LOG;
    this.logger.level = logLevel;
    this.logger.store();
    this.logger.info('set logger to Level', logLevel);
  }


  hmrOnInit(store) {
    console.log('HMR store', store);
  }

  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
