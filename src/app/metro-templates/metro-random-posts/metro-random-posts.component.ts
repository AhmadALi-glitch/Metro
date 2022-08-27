
import { Component, OnInit } from '@angular/core';
import { RandomsService } from '../../services/posts/randoms.service';

@Component({
  selector: 'metro-random-posts',
  templateUrl: './metro-random-posts.component.html',
  styleUrls: ['./metro-random-posts.component.css']
})
export class MetroRandomPostsComponent implements OnInit {

  constructor(private service:RandomsService) { }

  randomPosts:Array<any> = [
    {},
    {}
  ]

  ngOnInit(): void {
    this.service.getAll("")
      .subscribe((data:any) => {
        data.forEach((element:any) => {
          this.randomPosts.unshift(element._fields[0].properties);
        })
      })
  }

}
