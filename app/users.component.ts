import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS} from 'angular2/http';
import {UsersService } from './users.service';
import {RouterLink} from 'angular2/router';

@Component({
    templateUrl: `app/users.component.html`,
    providers: [UsersService,HTTP_PROVIDERS],
    directives:[RouterLink]
})

export class UsersComponent implements OnInit{
        users: any[];
        constructor(private _usersService:UsersService) {
        
            
        }
        ngOnInit() {
            this._usersService.getUsers()
                .subscribe(users => this.users = users);
        }
        deleteUser(user) {
            if (confirm("Are you sure want to delete:" + user.name + "?")) {
                var index = this.users.indexOf(user);
                //getting the index of the user
                //then we need to  splice to faken the delete
                this.users.splice(index, 1);
                this._usersService.deleteUser(user.id)
                    .subscribe(null,
                    err => {
                        alert("Could not delete user!");
                        this.users.splice(index, 0, user);
                        })

                }
        }
}
