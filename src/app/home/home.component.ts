import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "We are the Roller Derby Men of Wisconsin";

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit () {
      !function(d,s,id){
          var js: any,
              fjs=d.getElementsByTagName(s)[0],
              p='https';
          if(!d.getElementById(id)){
              js=d.createElement(s);
              js.id=id;
              js.src=p+"://platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js,fjs);
          }
      }
      (document,"script","twitter-wjs");
    }

}
