import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  interestedArticle;

  constructor(private news: NewsService) { }

  ngOnInit(): void {
    this.interestedArticle = this.news.newsSelected;
  }

}
