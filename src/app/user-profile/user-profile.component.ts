import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  username: string;
  subscription: Subscription;
  response: any;
  constructor( private http: HttpClient, route: ActivatedRoute, private usersService: UsersService ) { 
    this.subscription = route.params.subscribe( params => this.username = params['username']);
  }

  ngOnInit() {
    this.http.get('https://api.github.com/users/'+this.username).subscribe( response => {
      this.response = response;});
  }

}
