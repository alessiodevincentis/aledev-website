import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  changeTheme(isDarkMode: boolean) {
      document.documentElement.style.setProperty('--body-color', isDarkMode? '#121212':'#FFEFCA');
      document.documentElement.style.setProperty('--navbar-color', isDarkMode?'#222831':'#2F4858');
      document.documentElement.style.setProperty('--button-color', isDarkMode?'#FFD369':'#FBCA1F');
      document.documentElement.style.setProperty('--card-background', isDarkMode?'#1E1E1E':'white');
      document.documentElement.style.setProperty('--card-border', isDarkMode?'#222831':'#1d3557');
      document.documentElement.style.setProperty('--text-color', isDarkMode?'#E0E0E0':'#000');
      document.documentElement.style.setProperty('--card-title', isDarkMode?'#E0E0E0':'#3f3f46');
      document.documentElement.style.setProperty('--article-info', isDarkMode?'#F8F9F9':'#3f3f46');
      document.documentElement.style.setProperty('--pre-background-color', isDarkMode?'#292929':'#FFF9EE');
      document.documentElement.style.setProperty('--code-snippet', isDarkMode?'#E0E0E0':'#2F4858');
    document.documentElement.style.setProperty('--sidebar-color', isDarkMode?'#FFEFCA':'#222831');
  }
}
