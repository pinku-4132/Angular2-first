import {Component} from 'angular2/core';
import { NavbarComponent } from './nav-bar.component';
import { RouteConfig ,ROUTER_DIRECTIVES} from 'angular2/router';
import { HomeComponent} from './home.component';
import { UsersComponent} from './users.component';
import { PostsComponent} from './posts.component';
@RouteConfig([
    { path: '/home', name:'Home', component:HomeComponent,useAsDefault:true},
    {path:'/users',name:'Users',component:UsersComponent},
    {path:'/posts',name:'Posts',component:PostsComponent},
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
    directives:[NavbarComponent,ROUTER_DIRECTIVES]

})
export class AppComponent {

 }