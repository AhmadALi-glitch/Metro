import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  @Output('onWrite') onWrite = new EventEmitter();

  word:string | undefined;

  upWord() {
    this.onWrite.emit(this.word);
  }

  ngOnInit(): void {
  }

}
