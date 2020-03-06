import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportsNews:Array<Object>;
  constructor(private news:NewsService, private router:Router) { }

  //Subscribing data from NewsService
  ngOnInit(): void {
    this.news.sportsNews().subscribe( data =>{
      this.sportsNews = JSON.parse(JSON.stringify(data)).articles ;
      console.log( JSON.parse(JSON.stringify(data)).articles );
    })
  }
  //Selected news to display in Single Page
  selectedNews(news){
    this.news.onSelectNews(news);
    this.router.navigate(['/news/article']);
    //console.log(news);
  }
}
