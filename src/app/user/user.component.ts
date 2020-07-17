import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FullUser, User } from '../model/user';
import { GithubService } from '../service/github.service';
import { RouteParams } from 'angular-routing';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$: Observable<FullUser>;
  followers$: Observable<User[]>;

  constructor(private readonly service: GithubService, private routeParams$: RouteParams<{ username: string }>) { }

  ngOnInit(): void {
    this.user$ = this.routeParams$.pipe(
      switchMap(({ username }) => this.service.getUser(username))
    );
    this.followers$ = this.routeParams$.pipe(
      switchMap(({ username }) => this.service.getFollowers(username))
    );
  }

  trackBy(index: number, item: User): number {
    return item.id;
  }
}
