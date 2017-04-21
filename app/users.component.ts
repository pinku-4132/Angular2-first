import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import {UsersService } from './users.service';


@Component({
    templateUrl: `app/users.component.html`,
    providers:[UsersService,HTTP_PROVIDERS]
})

export class UsersComponent implements OnInit{
        users: any[];
        constructor(private _usersService:UsersService) {
        
            
        }
        ngOnInit() {
            this._usersService.getUsers()
                .subscribe(users => this.users = users);
        }
}
