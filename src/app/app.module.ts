import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component'; 
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FeedbackComponent } from './feedback/feedback.component';
import { EventsComponent } from './events/events.component';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    FeedbackComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatCarouselModule,
    AppRoutingModule,
    MarkdownModule.forRoot({ 
       loader: HttpClient ,
       markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
      // loader: HttpClientModule, 
      // markedOptions: {
      //   provide: MarkedOptions,
      //   useFactory: markedOptionsFactory,
      // },
    }),
    MarkdownModule.forChild(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
