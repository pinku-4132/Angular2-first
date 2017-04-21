import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router} from 'angular2/router';


@Component({
    selector: 'navbar',
    templateUrl: 'app/nav-bar.component.html',
    directives:[ROUTER_DIRECTIVES]
    
})

export class NavbarComponent{

        constructor(private _route:Router) {
        
    }
        public isRouteActive(route) {
            var instruction = this._route.generate(route);
            return this._route.isRouteActive(instruction);
    }
}