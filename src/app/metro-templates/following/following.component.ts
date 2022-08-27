import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FollowingService } from '../../services/following/following.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class IFollowComponent implements OnInit {

  @Input("email") email:string | undefined;

  @Input("update") updateFollowing:boolean | undefined;

  

  constructor(private service:FollowingService,private route:Router,private router:ActivatedRoute) { }

  URL= "http://localhost:2000/";
  following:any = [];

  @Output("onRefresh") refresh = new EventEmitter();

  ngOnInit(): void {
    
    this.service.getAll(this.email)
      .subscribe({
        error : (err:any) => {
          console.log(err);
        },
        complete : () => {
          console.log("complete");
      },
      next : (data:any) => {
        data.forEach((element:any) => {
          const person = {
            email: element._fields[0],
            name : element._fields[1],
            image : element._fields[2]
          }

          this.following.push(person);
      })
    
   }
  })
  }

  toHisPage(email:any) {
    if(localStorage.getItem("email") == email) {
      this.route.navigate(["me"]);
    }
    else {
      this.route.navigate(["page/", email]);
      this.refresh.emit();
    }
  }


}
