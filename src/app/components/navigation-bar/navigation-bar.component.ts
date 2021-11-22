import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme-service/theme.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  openSideBar = false;
  isMobileLayout = false;
  darkMode = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isMobileLayout = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileLayout = window.innerWidth < 768;

  }

  changeTheme() {
    this.themeService.changeTheme();
    this.darkMode = !this.darkMode;
  }
}
