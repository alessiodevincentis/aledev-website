import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  code = `
body {
  background: #FFEFCA;
}

@font-face {
  font-family: "odin";
  src: local("odin"), url(assets/fonts/odin/odin-light.otf) format("opentype");
}

@font-face {
  font-family: "avant-garde";
  src: local("odin"), url(assets/fonts/avant-garde/avant_garde_regular.ttf) format("truetype");
}

body,
body .p-component
{
  font-family: "avant-garde", sans-serif;
}

button {
  background-color: #FBCA1F;
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid #2F4858;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
}

button:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
  cursor: pointer;
}

button:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}

`;

  java_code = `
  public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
  }
 `;

  constructor() { }

  ngOnInit(): void {
  }

}
