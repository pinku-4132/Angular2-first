import {Component} from 'angular2/core';
import { NavBarComponent } from './nav-bar.component';
import { RouteConfig ,ROUTER_DIRECTIVES} from 'angular2/router';
import { HomeComponent} from './home.component';
import { UsersComponent} from './users.component';
import { PostsComponent } from './posts.component';
import { UserFormComponent } from './newuser.component';
import {NotFoundComponent } from './not-found.component';
@RouteConfig([
    { path: '/', name:'Home', component:HomeComponent,useAsDefault:true},
    {path:'/users',name:'Users',component:UsersComponent},
    { path: '/posts', name: 'Posts', component: PostsComponent },
    {path:'/users/:id',name:'EditUser',component:UserFormComponent},
    { path: '/users/new', name: 'NewUser', component: UserFormComponent },
    {path:'/not-found',name:'NotFound',component:NotFoundComponent},
    {path:'/*other',name:'Others',redirectTo:['Home']}
])
    
@Component({
    selector: 'my-app',
    template: `
    
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        
    `,
    directives:[NavBarComponent,ROUTER_DIRECTIVES]

})
export class AppComponent {

 }