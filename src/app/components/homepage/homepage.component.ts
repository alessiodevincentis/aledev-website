import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  nameForm: any;
  emailForm: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openArticle() {
    this.router.navigate(['article']);
  }
}
