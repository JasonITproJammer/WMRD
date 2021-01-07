import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit {
  showVideos = true;
  showPhotos = false;
  onChange(newOption) {
    console.log(newOption);
    if(newOption == "videos") {
      this.showVideos = true;
      this.showPhotos = false;
    } else {
      this.showPhotos = true;
      this.showVideos = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
