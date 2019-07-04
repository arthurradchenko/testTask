import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userCount: number = 0;
  usersData$: Observable<any>;
  onClick: EventEmitter<Observable<any>> = new EventEmitter<Observable<any>>();
  storedName: FormData;

  constructor(private http: HttpClient) {
    let userData = {};
    this.usersData$ = of(userData);
  }

  findUsersByName(user, page?) {
    this.storedName = new FormData();
    this.storedName = user;
    if (page) this.usersData$ = this.http.get('https://api.github.com/search/users?q=' + this.storedName.get('name') + '&page=' + page + '&per_page=100');
    else this.usersData$ = this.http.get('https://api.github.com/search/users?q=' + this.storedName.get('name') + '&page=1&per_page=100');
    this.onClick.emit(this.usersData$);
  }
}
