import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { GithubService } from '../service/github.service';
import { RouteParams } from 'angular-routing';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers$: Observable<User[]>;

  constructor(private readonly service: GithubService, private routeParams$: RouteParams<{ username: string }>) { }

  ngOnInit(): void {
    this.followers$ = this.routeParams$.pipe(
      switchMap(({ username }) => this.service.getFollowers(username))
    );
  }

  trackBy(index: number, item: User): number {
    return item.id;
  }
}
