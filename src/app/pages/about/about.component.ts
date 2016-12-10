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
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  items : [AboutItem];  

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
    
  }

}
