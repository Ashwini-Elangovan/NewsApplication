import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessNews:Array<Object>;
  constructor(private news:NewsService, private router:Router) { }

  ngOnInit(): void {
    //Subscribing data from NewsService
    this.news.businessNews().subscribe( data =>{
      this.businessNews = JSON.parse(JSON.stringify(data)).articles ;
      console.log( JSON.parse(JSON.stringify(data)).articles );
    })
  }
  //Selected news to display in single page
  selectedNews(news){
    this.news.onSelectNews(news);
    this.router.navigate(['/news/article']);
    //console.log(news);
  }
}
