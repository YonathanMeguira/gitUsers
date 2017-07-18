import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';

@Injectable()
export class GitAPI {
  constructor(private http: Http){}
  searchUsers(user: string): Observable<any> {
    const searchUrl = `https://api.github.com/search/users?q=${user}`;
    return this.http.get(searchUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not retrieve the  user list'));
  }
  queryRepos(repoUrl: string): Observable<any> {
    return this.http.get(repoUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not retrieve the repos list'));
  }
}
