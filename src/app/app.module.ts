import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './components/pages/home/home.module';
import { ListPostModule } from './components/posts/list-post/list-post.module';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { PostComponent } from './components/posts/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { AboutModule } from './components/pages/about/about.module';

/*Firebase*/
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FontAwesomeModule,
    AppRoutingModule,
    HomeModule,
    ListPostModule,
    NewPostModule,
    MaterialModule,
    AboutModule
  ],
  providers: [{ provide: StorageBucket, useValue: 'gs://ngblog-bb0cc.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
