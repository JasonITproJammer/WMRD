import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
  providers: [DataService]
})
export class JoinComponent implements OnInit {
  showHeard = false;
  showState = false;

  constructor() { }

  ngOnInit() {

  }

  onHeardChange(value){
    if (value == "other"){
      this.showHeard = true;
    } else {
      this.showHeard = false;
    }
  }

  onStateChange(value){
    if (value == "other"){
      this.showState = true;
    } else {
      this.showState = false;
    }
  }
}
