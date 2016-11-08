import {Component, ViewEncapsulation} from '@angular/core';

import { PageConstant } from './shared/page.consts';

@Component({
  selector: PageConstant.PAGES_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <div>pages</div>
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
