import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { News } from 'src/app/models/news.model';
import { NewsBrApiService } from 'src/app/services/news-br-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {

  news: News;
  currentIndex: number = 0;
  article: Article;

  constructor(private newsBrApiService: NewsBrApiService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.newsBrApiService.getTopHeadlines()
      .subscribe(news => {
        this.news = news;
        this.setArticle();
      });
  }

  incrementIndex(): void {
    if (this.currentIndex === this.news.articles.length - 1) return;
    this.currentIndex++;
    this.setArticle();
  }

  decrementIndex(): void {
    if (this.currentIndex === 0) return;
    this.currentIndex--;
    this.setArticle();
  }

  onClickIncrement(): void {
    this.incrementIndex();
  }

  onClickDecrement(): void {
    this.decrementIndex();
  }

  setArticle(): void {
    if (!this.news.articles || this.news.articles.length === 0) return;
    this.article = this.news.articles[this.currentIndex];
  }
}
