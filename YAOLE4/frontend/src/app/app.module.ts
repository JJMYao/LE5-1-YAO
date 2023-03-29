import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PostsModel } from './models/post.model';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './components/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    PostDetailComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }