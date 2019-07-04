import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-output',
  templateUrl: './users-output.component.html',
  styleUrls: ['./users-output.component.sass']
})
export class UsersOutputComponent implements OnInit {

  users$: Observable<Object>;
  users: any;
  subscription: Object = null;
  page: number = 1;
  pageCount: number;

  constructor(private usersService: UsersService, private router: Router) {
    this.subscription = this.usersService.onClick.subscribe(resp => {
      this.users$ = resp;
    });
  }

  ngOnInit() {

  }

  goToPrevious(){
    this.page--;
    this.usersService.findUsersByName(this.usersService.storedName,this.page);
  }

  goToNext(){
    console.log(this.usersService.storedName);
    this.page++;
    this.usersService.findUsersByName(this.usersService.storedName,this.page);
  }

  viewProfile(name){
    this.router.navigate(['/user'], {queryParams: {username: name}});
  }
}
