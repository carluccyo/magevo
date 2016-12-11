import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

export class AboutItem {
  id: String;
  title: String;
}

export const ITEMS : [AboutItem] = [
  {id: "1", title: 'title'},
  {id: "2", title: 'title'},
  // {id: "3", title: 'title'},
  // {id: "4", title: 'title'},
  // {id: "5", title: 'title'},
  // {id: "6", title: 'title'},
  // {id: "7", title: 'title'},
  // {id: "8", title: 'title'},
  // {id: "9", title: 'title'},
  // {id: "10", title: 'title'},
  // {id: "11", title: 'title'},
  // {id: "12", title: 'title'}
]


@Component({
  selector: 'my-about',
  template:`
    <div class="container">
      <div class="row" >
         <div [@move]='id' class="item col-md-2" *ngFor="let item of items; let i = index; trackBy: trackByFn">
          <h3>{{item.title + item.id}}</h3>
          <p>{{item.title}}</p>
         </div>         
      </div>
      <div class="row" >
         <div [@moveFast]='id' class="item col-md-2" *ngFor="let item of items; let i = index; trackBy: trackByFn">
          <h3>{{item.title + item.id}}</h3>
          <p>{{item.title}}</p>
         </div>         
      </div>
    </div>
  `,
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('move', [
      transition('void => *', [
        style({transform: 'translateY(-100%)'}), 
        animate(500)
        ])
    ]),
    trigger('moveFast', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}), 
        animate(100)
        ])
    ])
    
  ]
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
