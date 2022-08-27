import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  
  @Input("photoPath") photoPath:string | undefined;
  @Input("name") name:string | undefined;
  @Input("email") email:string | undefined;
  @Input("about") about:string | undefined;

  @Output("onUpMessage") onUpMessage = new EventEmitter();

  upMessage(value:any) {
    this.onUpMessage.emit(value);
  }

  constructor(private route:ActivatedRoute) { }

  updatePath(value:any) {
    this.photoPath = value;
  }

  isEditAuth=false;

  ngOnInit(): void {
    this.route.url
      .subscribe((url:any) => {
        if(url[0].path === "me") {
          this.isEditAuth = true;
        }
        else{
          this.isEditAuth = false;
        }
      })
  }

}


