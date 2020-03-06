import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sportsNews:Array<Object>;
  technologyNews:Array<Object>;
  scienceNews:Array<Object>;
  healthNews:Array<Object>;
  generalNews:Array<Object>;
  entertainmentNews:Array<Object>;
  businessNews:Array<Object>;


  constructor(private news:NewsService, private router:Router) { }

  ngOnInit(): void {

    //Sports News Data from NewsService
    this.news.sportsNews().subscribe( data =>{
      this.sportsNews = JSON.parse(JSON.stringify(data)).articles ;
    });

    //Technology News data from NewsService
    this.news.technologyNews().subscribe( data =>{
      this.technologyNews = JSON.parse(JSON.stringify(data)).articles ;
    });

    //Science News data from NewsService
    this.news.scienceNews().subscribe( data =>{
      this.scienceNews = JSON.parse(JSON.stringify(data)).articles ;
    });

    //Health News data from NewsService
    this.news.healthNews().subscribe( data =>{
      this.healthNews = JSON.parse(JSON.stringify(data)).articles ;
    });

    //General News data from NewsService
    this.news.generalNews().subscribe( data =>{
      this.generalNews = JSON.parse(JSON.stringify(data)).articles ;
    });

    //Entertainment News data from NewsService
    this.news.entertainmentNews().subscribe( data =>{
      this.entertainmentNews = JSON.parse(JSON.stringify(data)).articles ;
    });

    //Busines News data from NewsService
    this.news.businessNews().subscribe( data =>{
      this.businessNews = JSON.parse(JSON.stringify(data)).articles ;
    });

  }
  // Selected news to navigate to single page
  selectedNews(news){
    this.news.onSelectNews(news);
    this.router.navigate(['/news/article']);
  }
}
   




