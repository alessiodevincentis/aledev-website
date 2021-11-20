import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ArticleComponent} from "./components/article/article.component";

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'article', component: ArticleComponent },
  { path: '**',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
