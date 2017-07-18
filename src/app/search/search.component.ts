import {Component} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {GitAPI} from '../API/api.service';
import {UsersResults, Repos} from './models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GitAPI]
})

export class SearchComponent {
  usersArr: UsersResults[];
  userQuery: string;
  userSelected: boolean;
  repoArr: Repos[];
  selectedUser: string;
  repoLength: number;

  constructor(private git: GitAPI,
              private router: Router) {
    this.userSelected = false;
  }

  searchUsers = (user, login) => {
    this.git.searchUsers(user).subscribe(
      (res) => {
        this.usersArr = [];
        this.selectedUser = login;
        res.items.map((usr) => {
          const mappedObj = {
            'login': usr.login,
            'avatar': usr['avatar_url'],
            'id': usr.id,
            'url': usr.url,
            'reposUrl': usr['repos_url']
          };
          this.usersArr.push(mappedObj);
        });
        console.log(this.usersArr);
        return this.usersArr;
      },
      error => console.log(error)
    );
  }

  selectUser = (repoUrl, login) => {
    this.git.queryRepos(repoUrl).subscribe(
      (res) => {
        this.repoArr = [];
        this.selectedUser = login;
        this.repoLength = res.length;
        res.map((repo) => {
          const repoObj = {
            'full_name': repo.full_name,
            'description': repo.description,
            'language': repo.language,
            'html_url': repo.html_url,
          };
          this.repoArr.push(repoObj);
        });
        console.log(this.repoArr);
      },
      error => console.log(error)
    );
  }
}
