import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input('id') postId:string="";

  constructor(private service:CommentsService) {}

  comments:Array<Comment> = [];

  ngOnInit(): void {
    console.log(this.postId)
    this.service.getAll(String(this.postId)).
      subscribe({
        error : (err:any) => {
          console.log(err)
        },
        next : (data:any) => {
          data.forEach((element:any) => {
           this.comments.push(element._fields[0].properties)
          })
        }
      })
  }

}
