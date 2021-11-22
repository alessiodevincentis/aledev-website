import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  changeTheme() {
    document.documentElement.style.setProperty('--body-color', '#121212');
    document.documentElement.style.setProperty('--navbar-color', '#222831');
    document.documentElement.style.setProperty('--button-color', '#FFD369');
    document.documentElement.style.setProperty('--card-background', '#1E1E1E');
    document.documentElement.style.setProperty('--card-border', '#222831');
    document.documentElement.style.setProperty('--text-color', '#E0E0E0');
    document.documentElement.style.setProperty('--card-title', '#E0E0E0');
    document.documentElement.style.setProperty('--article-info', '#F8F9F9');
    document.documentElement.style.setProperty('--pre-background-color', '#292929');
    document.documentElement.style.setProperty('--code-snippet', '#E0E0E0');
  }
}
