import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { NavbarComponent } from './components/navbar/navbar.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ILogger, Logger, Level } from 'angular2-logger/core';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    NavbarComponent
  ],
  providers: [
    ApiService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public appRef: ApplicationRef, public logger: Logger) {
    this.initLogger();
  }


  initLogger(){
    var logLevel = Level.LOG;
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
