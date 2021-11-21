import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  changeTheme() {
    document.documentElement.style.setProperty('--body-color', '#393E46');
    document.documentElement.style.setProperty('--navbar-color', '#222831');
    document.documentElement.style.setProperty('--button-color', '#FFD369');
  }
}
