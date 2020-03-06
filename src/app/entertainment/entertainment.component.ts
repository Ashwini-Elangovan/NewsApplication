import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNews:Array<Object>;
  constructor(private news:NewsService, private router:Router) { }

  ngOnInit(): void {
    //Subscribing data from NewsService
    this.news.entertainmentNews().subscribe( data =>{
      this.entertainmentNews = JSON.parse(JSON.stringify(data)).articles ;
    })
  }
  //Selected News to display in Single Page
  selectedNews(news){
    this.news.onSelectNews(news);
    this.router.navigate(['/news/article']);
  }
}
