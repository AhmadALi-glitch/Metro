import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  constructor(private service:PostService) { }

  @Input('email') email:string | undefined;

  @Input("update") updatePosts:boolean | undefined;

  posts:any=
  [{},{},{},{},{},{},{},{},{},{},{}
  ];

  ngOnInit(): void {
    this.service.getAll(this.email)
      .subscribe({
        error : (error:any) => {
          throw error
        },
        next : (data:any) => {
          data.forEach((element:any) => {
            this.posts.push(element._fields[0].properties);
          });
        }
      })
  }

}
