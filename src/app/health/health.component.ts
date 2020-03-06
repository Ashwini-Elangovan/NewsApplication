import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthNews:Array<Object>;
  constructor(private news:NewsService, private router:Router) { }

  ngOnInit(): void {

    //Subscribing data from NewsService
    this.news.healthNews().subscribe( data =>{
      this.healthNews = JSON.parse(JSON.stringify(data)).articles ;
    })
  }
    //Selected News to display in Single Page
  selectedNews(news){
    this.news.onSelectNews(news);
    this.router.navigate(['/news/article']);
  }
}
