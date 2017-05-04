import { Component, OnInit } from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {CanDeactivate, Router,RouteParams} from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import {BasicValidators} from './emailcustomvalidator';
import { UsersService } from './users.service';
import {User } from './user';

@Component({
    templateUrl: 'app/newuser.component.html',
	providers: [UsersService, HTTP_PROVIDERS]
})
export class UserFormComponent implements CanDeactivate,OnInit {
	form: ControlGroup;
	isSaving = false;
	title: string;
	user = new User();
	constructor(
        fb: FormBuilder,
		private _router: Router,
		private _routeparams:RouteParams,
        private _userService: UsersService
    ) {
		this.form = fb.group({
			name: ['', Validators.required],
			email: ['', BasicValidators.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
	}
	ngOnInit() {
		var id = this._routeparams.get('id');
		this.title = id ? 'Add User' : 'Edit User';
		if (!id)
			return;
		this._userService.getUser(id)
			.subscribe(user => this.user = user),
			response => {
				if (response.status == 404) {
					this._router.navigate(['NotFound']);
				}
			}

	}
    
    routerCanDeactivate(){
		if (this.form.dirty)
			return confirm('You have unsaved changes. Are you sure you want to navigate away?');

		return true; 
	}
    
	save() {
		var result;
		if (this.user.id){
			result = this._userService.updateUser(this.user);
			// For testing:
         	console.log("after call returned back: " + JSON.stringify(result));

		}
		
		this._userService.addUser(this.form.value)
            .subscribe(x => {
                // Ideally, here we'd want:
                // this.form.markAsPristine();
                    this._router.navigate(['Users']);
            });
		}

}