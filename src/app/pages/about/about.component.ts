import { Component, OnInit } from '@angular/core';

export class AboutItem {
  id: String;
  title: String;
}

export const ITEMS : [AboutItem] = [
  {id: "1", title: 'title1'},
  {id: "2", title: 'title2'}
]


@Component({
  selector: 'my-about',
  template:`
    <div class="container">
      <div class="row" >
         <div *ngFor="let item of items; let i = index; trackBy: trackByFn">
          <h3>{{item.title + item.id}}</h3>
          <p>{{item.title}}</p>
         </div>         
      </div>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  items : [AboutItem];  

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
    this.items = ITEMS;
  }

}
