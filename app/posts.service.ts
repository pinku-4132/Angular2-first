import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
    private _postUrl = "http://jsonplaceholder.typicode.com/posts";
    constructor(private _http: Http) {
        
    }
    getPosts(filter?) {
        var url = this._postUrl;
        if (filter && filter.userId)
            url +=  "?userId=" + filter.userId;    
        return this._http.get(url)
                .map(res => res.json());
    }
    getCommentsById(id) {
        return this._http.get(this._postUrl+"/"+id+"/comments")
            .map(res=>res.json());
       
   }
 
}