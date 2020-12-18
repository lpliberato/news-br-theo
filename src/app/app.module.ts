import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { HeadingSmallComponent } from './components/heading-small/heading-small.component';
import { ShapeComponent } from './components/shape/shape.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { MainComponent } from './components/main/main.component';
import { SubtitleSmallComponent } from './components/subtitle-small/subtitle-small.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPrimaryComponent,
    HeadingSmallComponent,
    ShapeComponent,
    ParagraphComponent,
    CardContentComponent,
    MainComponent,
    SubtitleSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
