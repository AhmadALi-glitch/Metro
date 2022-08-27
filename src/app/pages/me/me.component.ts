import { Component } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent {
  photoPath = localStorage.getItem("photoPath")?.toString();
  name = localStorage.getItem("name")?.toString();
  email = localStorage.getItem("email")?.toString();
  aboutMe = localStorage.getItem("aboutMe")?.toString();
}
