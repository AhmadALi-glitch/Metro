import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'metro-profile',
  templateUrl: './metro-profile.component.html',
  styleUrls: ['./metro-profile.component.css']
})
export class MetroProfileComponent implements OnInit {

  isEditAuth = false;

  @Input("photoPath") photoPath:string | undefined;
  @Input("name") name:string | undefined;
  @Input("email") email:string | undefined;
  @Input("about") about:string | undefined;

  @Input("update") updateUsersInfo:boolean | undefined;

  pVf = "";

  constructor(private route:ActivatedRoute) { }

  showPosts() {
    this.pVf = "posts";
  }

  showFollowing() {
    this.pVf = "following";
  }

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
