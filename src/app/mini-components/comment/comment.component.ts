import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input("comment") comment:any = {};

  constructor(private router:Router, private service:CommentsService, private toastr:ToastrService) { }

  goToHisPage(email:string) {
    if(email == localStorage.getItem('email')?.toString()) {
      this.router.navigate(["me/"]);
    }
    else {
      this.router.navigate(["page/", email]);
    }
  }


  deleteComment(commentId:string) {
    console.log(commentId)
    this.service.deleteOne(commentId)
      .subscribe({
        error : (err:any) =>{
          console.log(err);
        },
        complete : () => {
          this.toastr.success("Comment Deleted");
        }
      })
  }

  isMyComment:boolean=false;

  ngOnInit(): void {
      this.isMyComment = this.comment.authorEmail == localStorage.getItem("email");
  }

}
