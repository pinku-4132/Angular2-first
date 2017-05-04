import { Component,OnInit } from 'angular2/core';
import {HTTP_PROVIDERS } from 'angular2/http';
import { PostsService } from './posts.service';
import { UsersService} from './users.service';
import {SpinnerComponent } from './spinner.component';
@Component({
        templateUrl: 'app/posts.component.html',
        styles: [
                `
                .post li{cursor :default;}
                .post li:hover { background: #ecf0f1; }
                .list-group-item.active, 
                .list-group-item.active:hover, 
                .list-group-item.active:focus { 
                        background-color: #ecf0f1;
                        border-color: #ecf0f1; 
                        color: #2c3e50;
                        }                
                `],
        providers: [PostsService,UsersService, HTTP_PROVIDERS],
        directives: [SpinnerComponent]

})

export class PostsComponent implements OnInit{
        posts: any[];
        users: any[];
        postLoading;
        commentsLoading;
        currentPost;
        constructor(private _postsService: PostsService,
                    private _userService:UsersService) {
                
        }
        ngOnInit() {
 
                this.loadUsers();
                 this.loadPosts();

        } 
       private loadUsers() {
                   this._userService.getUsers()
                        .subscribe(users => this.users = users);                
        }
       private loadPosts(filter?) {
                    this.postLoading = true;
                this._postsService.getPosts(filter)
                        .subscribe(posts => this.posts = posts, null,
                        () => this.postLoading = false);
        }
       private reloadPosts(filter) {
                this.currentPost = null;
                this.loadPosts(filter);
        }

        select(post) {
                this.currentPost = post;
                this.commentsLoading = true;
                this._postsService.getCommentsById(post.id)
                        .subscribe(comments =>
                                this.currentPost.comments = comments,
                null,()=>this.commentsLoading=false)
        }
}