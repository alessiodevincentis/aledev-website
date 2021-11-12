import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  openSideBar = false;
  isMobileLayout = false;

  constructor() { }

  ngOnInit(): void {
    this.isMobileLayout = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileLayout = window.innerWidth < 768;

  }

}
