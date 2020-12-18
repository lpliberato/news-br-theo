import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsBrApiService {

  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<News> {
    return this.http.get(`http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=97d4741359104cdfb571ec6b03f64a79`).pipe(map((news: News) => news));
  }
}
