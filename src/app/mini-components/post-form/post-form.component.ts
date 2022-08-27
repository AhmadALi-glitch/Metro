import { Component, OnInit} from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent{
  
  constructor(private service:PostService, private toastr:ToastrService) {}

  postForm = new FormGroup({
    paragraph : new FormControl('', [Validators.required])
  })
  
  sendPost() {
  
    this.service.add({postInfo : this.postForm.value, author:localStorage.getItem('name')?.toString() }, localStorage.getItem('email'))
    .subscribe((data:any) => {
      this.toastr.success("Post Created");
    })    
  }

}

