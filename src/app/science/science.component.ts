import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  scienceNews:Array<Object>;
  constructor(private news:NewsService, private router:Router) { }

  ngOnInit(): void {
    //Subscribing data from NewsService
    this.news.scienceNews().subscribe( data =>{
      this.scienceNews = JSON.parse(JSON.stringify(data)).articles ;
      console.log( JSON.parse(JSON.stringify(data)).articles );
    })
  }
  //Selected News to display in Single Page
  selectedNews(news){
    this.news.onSelectNews(news);
    this.router.navigate(['/news/article']);
    //console.log(news);
  }

}
