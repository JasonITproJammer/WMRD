import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  imgsrc = "images/main/buytix.png";

  constructor() { }

  ngOnInit() {
  }

  over(){
    this.imgsrc = "images/main/buytix_hover.png";
  }
  out(){
    this.imgsrc = "images/main/buytix.png";
  }
}
