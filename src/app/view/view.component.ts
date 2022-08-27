import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/users/users.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   if(!localStorage.getItem('email')) {
    //     this.router.navigate(['/sign'])
    //   }
    // },100)
  }
}
