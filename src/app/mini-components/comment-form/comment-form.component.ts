import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';
import { CommentsService } from '../../services/comments/comments.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  @Input('id') postId:string='';

  constructor(private service:CommentsService) {}

  commentText:string='';

  sendComment() {

    const comment:Comment = {
      text: this.commentText,
      authorName : localStorage.getItem('name'),
      authorEmail : localStorage.getItem('email'),
      postId: this.postId,
      commentId:""
    }

    this.service.add(comment, "").
      subscribe({
        error : (err:any) => {
          console.log(err);
        }
        ,
        complete : () => {
          console.log("done");
        },
        next : (data:any) => {
          console.log(data);
        }
      })

  }


}
