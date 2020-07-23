import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FullUser } from '../model/user';
import { GithubService } from '../service/github.service';
import { RouteParams } from 'angular-routing';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$: Observable<FullUser>;

  constructor(
    private readonly service: GithubService,
    private readonly routeParams$: RouteParams<any>
  ) { }

  ngOnInit(): void {
    this.user$ = this.routeParams$.pipe(
      tap(params => console.log('FOUND PARAMS', params)),
      switchMap(({ username }) => this.service.getUser(username))
    );
  }
}
