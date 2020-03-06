import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsSelected;

  constructor(private http:HttpClient) { }

  // fetching data from server for Technology News
  technologyNews(){
    return this.http.get("http://localhost:3000/technology");
  }

  // fetching data from server for Sports News
  sportsNews(){
    return this.http.get("http://localhost:3000/sports");
  }

  // fetching data from server for Science News
  scienceNews(){
    return this.http.get("http://localhost:3000/science");
  }

  // fetching data from server for Health News
  healthNews(){
    return this.http.get("http://localhost:3000/health");
  }

  // fetching data from server for General News
  generalNews(){
    return this.http.get("http://localhost:3000/general");
  }

  // fetching data from server for Entertainment  News
  entertainmentNews(){
    return this.http.get("http://localhost:3000/entertainment");
  }

  // fetching data from server for Business News
  businessNews(){
    return this.http.get("http://localhost:3000/business");
  }

  // News Selected information
  onSelectNews(news) {
    this.newsSelected = news;
  }

  
}
