import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeIndex: number = 0;
  tabs = [];

  constructor() {
    for (let i = 0; i < 100; i++) this.tabs.push(i);
  }
}
