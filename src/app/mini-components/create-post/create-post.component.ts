import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  @Output("upPostPhotoToParent") upPostPhotoToParent = new EventEmitter();

  constructor() { }

  isFullBox=false;

  toggleFullBox(box:HTMLDivElement) {
    this.isFullBox = !this.isFullBox;
    box.classList.toggle("fullbox");
  }


}
