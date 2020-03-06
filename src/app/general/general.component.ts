import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  generalNews:Array<Object>;
  constructor(private news:NewsService, private router:Router) { }

  ngOnInit(): void {
    //Subscribing data from NewsService
    this.news.generalNews().subscribe( data =>{
      this.generalNews = JSON.parse(JSON.stringify(data)).articles ;
    })
  }
    //Selected news to display in Single page
  selectedNews(news){
    this.news.onSelectNews(news);
    this.router.navigate(['/news/article']);
  }
}
