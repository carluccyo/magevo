import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./dashboard.scss')],
    template: require('./dashboard.html')
})
export class DashboardComponent {

    constructor() {
    }

}
