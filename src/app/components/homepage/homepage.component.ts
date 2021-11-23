import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Work} from "../../model/work";
import {Article} from "../../model/article";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  nameForm: any;
  emailForm: any;
  articles: Article[] = [];
  works: Work[] = [];

  constructor(private router: Router, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getLastArticles();
    this.getLastWorks();
  }

  openArticle(articleId: any) {
    this.router.navigate(['article',{articleId: articleId}]);
  }

  scrollTo(target: string) {
    const divTarget = document.getElementById(target);
    if(divTarget) {
      divTarget.scrollIntoView({behavior: "smooth", block: "center"});
    }
  }

  private getLastArticles() {
    this.firestore.collection<Article[]>('articles',(ref) =>
      ref.orderBy('dataInserimento','desc').limit(4)).snapshotChanges().subscribe(data => {
      this.articles = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      });
    });
  }

  private getLastWorks() {
    this.firestore.collection<Work[]>('works',(ref) =>
      ref.orderBy('dataInserimento','desc').limit(4)).snapshotChanges().subscribe(data => {
      this.works = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      });
    });
  }
}
