import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from 'angular-routing';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './service/github.service';
import { UserComponent } from './user/user.component';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule.forRoot(),
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
