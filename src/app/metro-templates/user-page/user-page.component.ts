import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollowStateService } from 'src/app/services/following/follow-state.service';
import  { UserService }  from "../../services/users/users.service"

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService:UserService, private followStateService:FollowStateService) { }

  userInfo:any = {};

  followState:boolean | undefined;

  URL = "http://localhost:2000/";

  updateUsersInfo = false;

  ngOnInit(): void {
    this.route.params
      .subscribe((param:any) => {
        this.userService.getOne(String(param.id))
          .subscribe((data:any) => {
            this.userInfo.email = data[0]._fields[0];
            this.userInfo.name = data[0]._fields[1];
            this.userInfo.photoPath = data[0]._fields[2];
            this.userInfo.about = data[0]._fields[3];
          })

          this.followStateService.add({
            p1 :String(localStorage.getItem("email")),
            p2 :String(param.id)
          },"")
            .subscribe({
              complete : () => {
                console.log()
              },
              error : (err:any) => {
                console.log(err)
              },
              next : (data:any) => {
                if(data.low == 0) {
                  this.followState = false;
                }
                if(data.low == 1) {
                  this.followState = true;
                } 
              } 
            })
      })


  }

}
