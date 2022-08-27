import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewComponent } from './view/view.component';
import { MetroHeaderComponent } from './metro-templates/metro-header/metro-header.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PostService } from './services/posts/posts.service';
import { UserService } from './services/users/users.service';
import { ServerErrorHandler } from './error-handlers/server-error-handler';
import { ErrorHandler } from '@angular/core';
import { MetroSignFormComponent } from './metro-templates/metro-sign-form/metro-sign-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MeComponent } from './pages/me/me.component';
import { EmailService } from './services/form/email.service';
import { SignService } from './services/form/sign.service';
import { LoginService } from './services/form/login.service';
import { LoginComponent } from './pages/login/login.component';
import { MetroLoginFormComponent } from './metro-templates/metro-login-form/metro-login-form.component';
import { SignComponent } from './pages/sign/sign.component';
import { MetroProfileComponent } from './metro-templates/metro-profile/metro-profile.component';
import { UserPostsComponent } from './mini-components/user-posts/user-posts.component';
import { PostComponent } from './mini-components/post/post.component';
import { CreditsComponent } from './mini-components/credits/credits.component';
import { CreatePostComponent } from './mini-components/create-post/create-post.component';
import { PostFormComponent } from './mini-components/post-form/post-form.component';
import { MetroRandomPostsComponent } from './metro-templates/metro-random-posts/metro-random-posts.component';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';
import { UploadImageComponent } from './mini-components/upload-image/upload-image.component';
import { LogoutComponent } from './mini-components/logout/logout.component';
import { FollowComponent } from './metro-templates/follow/follow.component';
import { PeopleComponent } from './pages/people/people.component';
import { IFollowComponent } from './metro-templates/following/following.component';
import { UserPageComponent } from './metro-templates/user-page/user-page.component';
import { SearchBoxComponent } from './mini-components/search-box/search-box.component';
import { CommentsComponent } from './metro-templates/comments/comments.component';
import { CommentComponent } from './mini-components/comment/comment.component';
import { CommentFormComponent } from './mini-components/comment-form/comment-form.component';
import { FilteredPeopleComponent } from './mini-components/filtered-people/filtered-people.component';
import { FloatSquaresAnimationComponent } from './animation-components/float-squares-animation/float-squares-animation.component';

const components = [AppComponent];
const pipes = [];
const directives = [];

@NgModule({
  declarations: [
    ...components,
    ViewComponent,
    MetroHeaderComponent,
    MetroSignFormComponent,
    HomeComponent,
    MeComponent,

    LoginComponent,
    SignComponent,
    
    MetroSignFormComponent,
    MetroLoginFormComponent,
    MetroProfileComponent,
    UserPostsComponent,
    PostComponent,
    CreditsComponent,
    CreatePostComponent,
    PostFormComponent,
    MetroRandomPostsComponent,
    UploadImageComponent,
    LogoutComponent,
    FollowComponent,
    PeopleComponent,
    IFollowComponent,
    UserPageComponent,
    SearchBoxComponent,
    CommentsComponent,
    CommentComponent,
    CommentFormComponent,
    FilteredPeopleComponent,
    FloatSquaresAnimationComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    FileUploadModule
  ],
  providers: [
    DataService,
    PostService,
    UserService,
    EmailService,
    SignService,
    LoginService,
    {provide : String, useValue: "stringValue"},
    // {provide : ErrorHandler , useClass:ServerErrorHandler}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
