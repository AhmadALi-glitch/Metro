import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/interfaces/Post';
import { CommentsComponent } from 'src/app/metro-templates/comments/comments.component';
import { PostService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  commentsBoxState:boolean = false;

  toggleCommentsBox() {
    this.commentsBoxState = !this.commentsBoxState;
  }

  host = "http://localhost:2000/";
  
  constructor(private toastr: ToastrService, private route:ActivatedRoute, private router:Router, private postService:PostService) { }
  
  @Input() postInfo:Post={
    postId:"",
    email:"",
    author : '',
    paragraph: '',
    date:''
  };
  
  isEditAuth=false;

  toHisPage(email:string) {
    if(email == localStorage.getItem('email')?.toString()) {
      this.router.navigate(["me/"]);
    }
    else {
      this.router.navigate(["page/", email]);
    }
  }

  deletePost(id:string) {
    this.postService.deleteOne(id).
      subscribe({
        complete : () => {
          this.toastr.success("Post Deleted");
        },
        error : () => {
          this.toastr.error("Delete Process Failed");
        }
      })
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
