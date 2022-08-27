import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metro-header',
  templateUrl: './metro-header.component.html',
  styleUrls: ['./metro-header.component.css'],
})
export class MetroHeaderComponent implements OnInit {
  constructor() {}

  showNav=false;

  toggleNav(arrow:HTMLElement) {
    this.showNav = !this.showNav;
    arrow.classList.toggle('rotate');
  }

  ngOnInit(): void {}
}
