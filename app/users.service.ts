import { Http } from 'angular2/http';
import { Injectable } from "angular2/core";
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{
    private _url = "http://jsonplaceholder.typicode.com/users";
    constructor(private _http:Http) {
        
    }
    getUsers() {
     return this._http.get(this._url)
            .map(res => res.json());
    }
    getUser(id) {
      return this._http.get(this.getUserUrl(id))
            .map(res => res.json());
    }
    addUser(user){
		return this._http.post(this._url, JSON.stringify(user))
		        .map(res => res.json());
    }
    updateUser(user) {
            //testing
            console.log("Before updating : ",JSON.stringify(user));
            return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
                    .map(res => res.json());
    }    
    deleteUser(id) {
            return this._http.delete(this.getUserUrl(id))
                    .map(res => res.json());
    }
        


    private getUserUrl(id) {
            return this._url + '/' + id;
    }    

}