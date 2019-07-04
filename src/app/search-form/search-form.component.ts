import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private usersService: UsersService) {  }

  ngOnInit() {
    this.searchForm = new FormGroup(
      {
        'name': new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){5,38}$')
        ])
      }
    )
  }
  searchUser(){
    const input = new FormData();
    input.append('name', this.searchForm.value.name);
    console.log(input.get('name'));
    this.usersService.findUsersByName(input);
  }

}
