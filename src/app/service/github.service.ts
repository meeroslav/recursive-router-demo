import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FullUser, User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private readonly http: HttpClient) { }

  getFollowers(username: string): Observable<User[]> {
    return this.http.get<User[]>(`https://api.github.com/users/${username}/followers`);
  }

  getUser(username: string): Observable<FullUser> {
    return this.http.get<FullUser>(`https://api.github.com/users/${username}`);
  }
}
