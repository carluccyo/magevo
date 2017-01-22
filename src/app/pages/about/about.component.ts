import { Component, OnInit, trigger, state, style, group, transition, animate } from '@angular/core';

export class AboutItem {
  id: String;
  title: String;
}

export const ITEMS: [AboutItem] = [
  { id: "1", title: 'title' },
  { id: "2", title: 'title' },
  { id: "3", title: 'title' },
  { id: "4", title: 'title' },
  { id: "5", title: 'title' },
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
  template: `
    <div class="container">
      <div class="row" >
         <div [@move]='id' class="item col-md-2" *ngFor="let item of items; let i = index; trackBy: trackByFn">
          <h3>{{item.title + item.id}}</h3>
          <p>{{item.title}}</p>
         </div>
      </div>
      <div class="row" >
         <div [@rotate]='id' [@moveFast]='id' class="item col-md-2" *ngFor="let item of items; let i = index; trackBy: trackByFn">
          <h3>{{item.title + item.id}}</h3>
          <p>{{item.title}}</p>
         </div>
      </div>
      <div class="row" >
         <div [@flyInOut]='id' [@moveFast]='id' class="item col-md-2" *ngFor="let item of items; let i = index; trackBy: trackByFn">
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
        style({ transform: 'translateY(-100%)' }),
        animate(1500)
      ])
    ]),
    trigger('moveFast', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1100)
      ])
    ]),
    trigger('rotate', [
      transition('void => *', [
        style({ transform: 'rotateZ(-180deg)' }),
        animate(1100)
      ])
    ]),
    trigger('flyInOut', [
      state('in', style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.7s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.7s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.9s ease', style({
            transform: 'translateX(350px)',
            width: 10
          })),
          animate('0.9s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  items: [AboutItem];

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
    this.items = ITEMS;
  }

}
