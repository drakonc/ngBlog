import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/pages/home/home.module';
import { ListPostModule } from './components/posts/list-post/list-post.module';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { PostComponent } from './components/posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ListPostModule,
    NewPostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
